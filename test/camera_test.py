# dg refers to data-generator

import sys
import os


import numpy as np
import cv2
from cpp import CPP
from dip import *

cpp = CPP()
cpp.start()

try:
    while cv2.waitKey(1) != ord('q'):
        color, depth = cpp.cd()
        show_cd(color, depth, 'cd')

        # crop
        hand_c, hand_d = crop_cd(color, depth)
        
        if hand_c is None or hand_d is None:
            # end of recording or not started
            continue

        show_cd(hand_c, hand_d, 'hand_cd')

finally:
    cpp.stop()