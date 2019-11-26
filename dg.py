# dg refers to data-generator

import numpy as np
import cv2
import pickle
import matplotlib.pyplot as plt
import os  # for directory operations
from time import time

from cpp import CPP
import dip

cpp = CPP()
cpp.start()

gesture = 'wipe_up'
root_path = './data/' + gesture

if not os.path.exists(root_path):
    os.makedirs(root_path)

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
            else:
                file_name = os.path.join(root_path, str(int(time()))) + '.pkl'
                f = open(file_name, 'wb')
                pickle.dump((data[:int(0.9 * len(data))], gesture), file=f)
                f.close()

                recording = False
            continue

        recording = True
        dip.show_cd(crop_c, crop_d, 'crop_cd')
        data.append((crop_c, crop_d))

finally:
    cpp.stop()