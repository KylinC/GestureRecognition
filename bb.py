# bb refers to Bounding Box

import numpy as np
import cv2


def get_bb(closed):
    (cnts, _) = cv2.findContours(closed.copy(), cv2.RETR_EXTERNAL,
                                 cv2.CHAIN_APPROX_SIMPLE)
    try:
        c = sorted(cnts, key=cv2.contourArea,
                   reverse=True)[0]  # find the largest one
    except:
        return None

    # compute the rotated bounding box of the largest contour
    rect = cv2.minAreaRect(c)
    box = np.int0(cv2.boxPoints(rect))

    # get right box
    Xs = [i[0] for i in box]
    Ys = [i[1] for i in box]
    x1 = min(Xs)
    x2 = max(Xs)
    y1 = min(Ys)
    y2 = max(Ys)
    height = y2 - y1
    width = x2 - x1

    bb = [
        max(y1, 0),
        min(y1 + height, closed.shape[0]),
        max(x1, 0),
        min(x1 + width, closed.shape[1])
    ]

    return bb  # [y_min, y_max, x_min, x_max]


def get_crop_image(image, bb):
    return image[bb[0]:bb[1], bb[2]:bb[3]]