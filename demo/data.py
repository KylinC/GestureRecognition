import pickle 
import numpy as np 
import random
import cv2

TAR_LEN = 16
GESTURE_NUM = 5

import os 

all_frames = []

for gesture in random.sample(os.listdir('data'), GESTURE_NUM):
    print(gesture)
    gesture_dir = os.listdir(os.path.join('data', gesture))
    sample = random.sample(gesture_dir, 1)

    sample_dir = os.path.join('data', gesture, sample[0])
    # print(sample_dir)

    gesture_frames = []

    with open(sample_dir, 'rb') as f:
        seq, label = pickle.load(f)
        seq_len = len(seq)
        for i, (c, d) in enumerate(seq):
            d_color_map = cv2.applyColorMap(cv2.convertScaleAbs(d, alpha=0.03),
                                       cv2.COLORMAP_JET)
            
            if i % (seq_len // TAR_LEN) == 0 and i + seq_len % TAR_LEN < seq_len:
                frame = np.vstack((c, d_color_map))
                gesture_frames.append(frame)

    all_frames.append(np.hstack(gesture_frames))
    print(len(gesture_frames))

    # cv2.imshow(gesture, all_frames[-1])
    # cv2.waitKey(0)

cv2.imshow("all_frames", np.vstack(all_frames))
cv2.waitKey(0)

cv2.imwrite('./demo/all_frames.png', np.vstack(all_frames))