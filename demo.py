import torch
import numpy as np

from crnn import crnn, preprocess

import os

dataset = []
for gesture in os.listdir('data'):
    for pkl_file in os.listdir(os.path.join('data', gesture)):
        dataset.append(os.path.join('data', gesture, pkl_file))

model = crnn()

model.load_state_dict(torch.load('model/model.pth'))

# pkl_file = 'data/wipe_left/1574756643.pkl'
right = 0
total = len(dataset)

for pkl_file in dataset:

    x, y = preprocess(pkl_file)
    if len(x.shape) < 4:
        continue

    x = torch.tensor(x.transpose(0, 3, 1, 2))

    out = model(x)
    target = torch.tensor(np.zeros((1, 20), dtype=np.float32))
    target[0, y] = 1

    in_label = y
    out_label = out.detach().numpy().argmax()

    print(in_label, out_label)

    if in_label == out_label:
        right += 1

# print(out)
# print(target)

print(right)
print(total)