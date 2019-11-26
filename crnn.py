import torch
import torch.nn as nn
import torch.optim as optim
import pickle
import numpy as np
import os

gesture_map = {}
for i, gesture in enumerate(os.listdir('data')):
    gesture_map[gesture] = i


class crnn(nn.Module):
    def __init__(self):
        super(crnn, self).__init__()
        self.feats = nn.Sequential(nn.Conv2d(3, 12, 3, 1, 1),
                                   nn.MaxPool2d(2, 2), nn.ReLU(True),
                                   nn.BatchNorm2d(12),
                                   nn.Conv2d(12, 28, 3, 1, 1), nn.ReLU(True),
                                   nn.BatchNorm2d(28),
                                   nn.Conv2d(28, 64, 3, 1, 1),
                                   nn.MaxPool2d(2, 2), nn.ReLU(True),
                                   nn.BatchNorm2d(64),
                                   nn.Conv2d(64, 16, 3, 1, 1),
                                   nn.MaxPool2d(2, 2), nn.ReLU(True),
                                   nn.BatchNorm2d(16))
        self.fc = nn.Sequential(nn.Linear(16 * 8 * 8, 120), nn.ReLU(False),
                                nn.Linear(120, 84), nn.ReLU(False),
                                nn.Linear(84, 64))
        self.lstm = nn.Sequential(
            nn.LSTM(input_size=64,
                    hidden_size=82,
                    num_layers=3,
                    bidirectional=False))
        self.linear = nn.Linear(82, 20)

    def forward(self, x):
        x = self.feats(x)
        x = x.view(x.size(0), -1)
        x = self.fc(x)
        x, hidden = self.lstm(x.unsqueeze(1))
        x = self.linear(x[-1])
        return x


def preprocess(pkl_file):
    with open(pkl_file, 'rb') as f:
        seq, gesture = pickle.load(f)
        data = []
        for c, d in seq:
            data.append(c)
        return np.array(data).astype(np.float32), gesture_map[gesture]


if __name__ == '__main__':
    model = crnn()
    criterion = nn.MSELoss()
    optimizer = optim.Adam(model.parameters())

    pkl_file = './data/wipe_right/1574757410.pkl'
    x, y = preprocess(pkl_file)
    x = torch.tensor(x.transpose(0, 3, 1, 2))
    target = torch.tensor(np.zeros((1, 20), dtype=np.float32))
    target[0, y] = 1
    # print(x.shape)
    # print(model(x).size())
    out = model(x)
    loss = criterion(out, target)

    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    print(loss.item())
