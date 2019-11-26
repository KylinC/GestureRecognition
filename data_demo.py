import pickle 
import numpy as np 
import cv2 
import os

root_path = './data/'

for file_name in os.listdir(root_path):
    file_name = os.path.join(root_path, file_name)
    f = open(file_name, 'rb')
    seq = pickle.load(f)
    for c, d in seq[: int(0.9 * len(seq))]:
        cv2.imshow('c', c)
        cv2.waitKey(1)
    f.close()

    while cv2.waitKey(1) != ord('q'):
        pass 
