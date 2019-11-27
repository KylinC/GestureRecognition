import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
import random
import os 

from pp import *
from crnn import crnn


gesture_map = {}
for i, gesture in enumerate(os.listdir('data')):
    gesture_map[gesture] = i


def acc_rate(model, testset):
    right = 0
    total = 0
    for pkl_file in testset:
        x, y = preprocess_pkl(pkl_file)
        if len(x.shape) < 4:
            continue
        x = torch.tensor(x.transpose(0, 3, 1, 2))
        target = torch.tensor(np.zeros((1, 20), dtype=np.float32))
        target[0, y] = 1

        out = model(x)
        if out.detach().numpy().argmax() == y:
            right += 1
        total += 1
    return right / total


# trainset and testset
dataset = []
for gesture in os.listdir('data'):
    for pkl_file in os.listdir(os.path.join('data', gesture)):
        dataset.append(os.path.join('data', gesture, pkl_file))

random.shuffle(dataset)

trainset = dataset[:int(len(dataset) * 0.7)]
testset = dataset[int(len(dataset) * 0.7):]

# model
model = crnn()
criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=5e-4)


# train
for epoch in range(2):
    for i, pkl_file in enumerate(trainset):
        x, y = preprocess_pkl(pkl_file)
        if len(x.shape) < 4:
            continue
        x = torch.tensor(x.transpose(0, 3, 1, 2))
        target = torch.tensor(np.zeros((1, 20), dtype=np.float32))
        target[0, y] = 1

        out = model(x)
        loss = criterion(out, target)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        if i % 10 == 0:
            print("epoch: {}, loss: {:.6f}, acc: {:.6f}".format(
                epoch, loss.item(), acc_rate(model, testset)))


# save model
model_path = 'model'
if not os.path.exists(model_path):
    os.makedirs(model_path)
torch.save(model.state_dict(), os.path.join(model_path, 'model.pth'))