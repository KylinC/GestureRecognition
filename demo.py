import torch
import numpy as np

from crnn import crnn, preprocess

model = crnn()

model.load_state_dict(torch.load('model/model.pth'))

pkl_file = 'data/wipe_left/1574756643.pkl'

x, y = preprocess(pkl_file)
x = torch.tensor(x.transpose(0, 3, 1, 2))
target = torch.tensor(np.zeros((1, 20), dtype=np.float32))
target[0, y] = 1

out= model(x)
print(out)
print(target)