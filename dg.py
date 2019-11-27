# dg refers to data-generator
# a pkl file contains ([(c1, d1), ...], label)
#   ci: 64 x 64 x 3 bgr image
#   di: 64 x 64     depth image
#   label: string

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

gesture = 'snap'
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
                with open(file_name, 'wb') as f:
                    pickle.dump((data[:int(0.9 * len(data))], gesture), file=f)

                print(file_name, ' saved!')

                recording = False
            continue

        recording = True
        dip.show_cd(crop_c, crop_d, 'crop_cd')
        data.append((crop_c, crop_d))

finally:
    cpp.stop()