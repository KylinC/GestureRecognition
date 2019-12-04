# pp refers to preprocessing

from cpp import CPP

# cpp = CPP()
# max_depth = cpp.get_clipping_distance()
# max_color = 255.0

# print(max_depth)
import numpy as np
import torch
import pickle
import os

with open("map.pkl", "rb") as f:
    gesture_map, gesture_map_rev = pickle.load(f)

def preprocess_pkl(pkl_file):
    with open(pkl_file, 'rb') as f:
        seq, gesture = pickle.load(f)
        data = []
        for c, d in seq:
            data.append(c)
        return np.array(data).astype(np.float32), gesture_map[gesture]


def preprocess_seq(seq):
    data = []
    for c, d in seq:
        data.append(c)
    return np.array(data).astype(np.float32)