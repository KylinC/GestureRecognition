# gesture recognition

# cv packages
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

# browser package
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
import time
from selenium.webdriver.common.keys import Keys

model = crnn()
model_path = 'model/model_0.pth'
model.load_state_dict(torch.load(model_path))

with open("map.pkl", "rb") as f:
    gesture_map, gesture_map_rev = pickle.load(f)


cpp = CPP()
cpp.start()

recording = False

chrome_driver = "/home/ding/Downloads/chromedriver_linux64/chromedriver"
driver = webdriver.Chrome(executable_path = chrome_driver)

# driver.get("https://www.csdn.net")
# driver.get("https://www.baidu.com")
driver.get("https://github.com")

operation_dict = {"wipe_left": driver.back(),"wipe_right": driver.forward()}

location = 0

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

                try:
                    if gesture == 'wipe_left':
                        driver.back()
                        location = 0
                    elif gesture == 'wipe_right':
                        driver.forward()
                        location = 0
                    elif gesture == 'wipe_up':
                        for i in range(location,location+10):
                            driver.execute_script('window.scrollTo(0, '+ str(i*100) +')')
                            location+=10
                            ActionChains(driver).key_down(Keys.DOWN).perform()
                            time.sleep(0.1)
                    elif gesture == 'wipe_down':
                        if(location-10)<0:
                            aim_location = 0
                        else:
                            aim_location = location - 10
                        for i in range(location,aim_location,-1):
                            driver.execute_script('window.scrollTo(0, '+ str(i*100) +')')
                            ActionChains(driver).key_down(Keys.DOWN).perform()
                            location = aim_location
                            time.sleep(0.1)
                    
                except:
                    pass

                recording = False 

            continue

        recording = True
        dip.show_cd(crop_c, crop_d, 'crop_cd')
        data.append((crop_c, crop_d))

finally:
    cpp.stop()
    cv2.destroyAllWindows()
    driver.quit()