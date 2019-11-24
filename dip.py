# dip refers to Digital Image Processing

from bb import *
import cv2
import numpy as np


def show_cd(color, depth, window_name='cd'):
    depth_colormap = cv2.applyColorMap(cv2.convertScaleAbs(depth, alpha=0.03),
                                       cv2.COLORMAP_JET)
    images = np.hstack((color, depth_colormap))
    cv2.imshow(window_name, images)


def get_hand_cd(color, depth):

    gray = cv2.cvtColor(color, cv2.COLOR_BGR2GRAY)
    ret, binary = cv2.threshold(gray, 0, 255,
                                cv2.THRESH_BINARY | cv2.THRESH_TRIANGLE)
    bb = get_bb(binary)

    if bb is None:
        return None, None

    crop_color = get_crop_image(color, bb)
    crop_depth = get_crop_image(depth, bb)

    resized_crop_color = cv2.resize(crop_color, (64, 64))
    resized_crop_depth = cv2.resize(crop_depth, (64, 64))

    return resized_crop_color, resized_crop_depth