# gesture recognition

import numpy as np
import cv2
import pickle
import matplotlib.pyplot as plt
import os  # for directory operations
from time import time

from cpp import CPP
import dip
from pp import *
from crnn import crnn

model = crnn()
model_path = 'model/model.pth'
model.load_state_dict(torch.load('model/model.pth'))

gesture_map = {}
gesture_map_rev = {}
for i, gesture in enumerate(os.listdir('data')):
    gesture_map[gesture] = i
    gesture_map_rev[i] = gesture

cpp = CPP()
cpp.start()

root_path = './data/'

# if not os.path.exists(root_path):
#     os.makedirs(root_path)

recording = False

try:
    while cv2.waitKey(1) != ord('q'):
        color, depth = cpp.cd()
        dip.show_cd(color, depth, 'cd')

        # crop
        crop_c, crop_d = dip.crop_cd(color, depth)
        if crop_c is None and crop_d is None:  # end of recording or not started
            if not recording:
                data = []
            else:  # end of recording
                # analyze data, give out result

                x = preprocess_seq(data[:int(0.9 * len(data))])
                if len(x.shape) < 4:
                    continue
                x = torch.tensor(x.transpose(0, 3, 1, 2))

                y = model(x).detach().numpy().argmax()
                gesture = gesture_map_rev[y]
                print(gesture)
                # choice = input("add it to training set? (y/n)")
                # if choice == 'y':
                #     file_name = os.path.join(root_path, gesture, str(int(time()))) + '.pkl'
                #     with open(file_name, 'wb') as f:
                #         pickle.dump((data[:int(0.9 * len(data))], gesture), file=f)

                recording = False 

            continue

        recording = True
        dip.show_cd(crop_c, crop_d, 'crop_cd')
        data.append((crop_c, crop_d))

finally:
    cpp.stop()