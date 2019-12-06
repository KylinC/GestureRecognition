# dip refers to Digital Image Processing

import sys
print(sys.path)

from bb import *
import cv2
import numpy as np


def show_cd(color, depth, window_name='cd'):
    depth_colormap = cv2.applyColorMap(cv2.convertScaleAbs(depth, alpha=0.03),
                                       cv2.COLORMAP_JET)
    images = np.hstack((color, depth_colormap))
    cv2.imshow(window_name, images)


def crop_cd(color, depth):

    gray = cv2.cvtColor(color, cv2.COLOR_BGR2GRAY)
    ret, binary = cv2.threshold(gray, 0, 255,
                                cv2.THRESH_BINARY | cv2.THRESH_TRIANGLE)

    kernel = np.ones((5, 5), np.uint8)

    binary = cv2.dilate(binary, kernel, iterations=4)
    binary = cv2.erode(binary, kernel, iterations=4)

    bb = get_bb(binary)

    if bb is None:
        return None, None #, binary

    crop_color = get_crop_image(color, bb)
    crop_depth = get_crop_image(depth, bb)

    resized_crop_color = cv2.resize(crop_color, (64, 64))
    resized_crop_depth = cv2.resize(crop_depth, (64, 64))

    return resized_crop_color, resized_crop_depth # , binary