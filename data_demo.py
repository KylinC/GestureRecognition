import pickle 
import numpy as np 
import cv2 
import os

root_path = './data/wipe_right'

for file_name in os.listdir(root_path):
    file_name = os.path.join(root_path, file_name)
    f = open(file_name, 'rb')
    seq, label = pickle.load(f)
    for c, d in seq:
        cv2.imshow('c', c)
        cv2.waitKey(1)
    f.close()

    while cv2.waitKey(1) != ord('q'):
        pass 
