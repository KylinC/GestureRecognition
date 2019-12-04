from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
import time
from selenium.webdriver.common.keys import Keys
import numpy as np

class superbrowser:
    def __init__(self,driver_path, time_out = 10, time_interval = 0.01):
        self.driver_path = driver_path
        self.driver = webdriver.Chrome(executable_path = self.driver_path)
        self.driver.set_page_load_timeout(time_out)
        self.time_interval = time_interval
        self.location = 0
        self.zoon = 1

    def get(self,target_url):
        self.driver.get(target_url)

    def get_test_url(self):
        self.get("https://basics.sjtu.edu.cn/~longhuan/teaching/CS499/")
        self.get("https://blog.csdn.net/smilejiasmile/article/details/80958010")
        self.get("https://www.shobserver.com/news/detail?id=25832")
        self.get("https://github.com/KylinC/GestureRecognition")
        self.wipe_left()
        self.wipe_left()

    def wipe_right(self):
        self.driver.forward()
        self.location = 0
        self.zoon = 1

    def wipe_left(self):
        self.driver.back()
        self.location = 0
        self.zoon = 1

    def wipe_down(self):
        aim_location = self.location + 10
        for i in range(self.location, aim_location):
            self.driver.execute_script('window.scrollTo(0, '+ str(i*100) +')')
            time.sleep(self.time_interval)
        self.location = aim_location
        time.sleep(0.5)

    def wipe_up(self):
        if self.location>=10:
            aim_location = self.location -  10
        else:
            aim_location = 0
        for i in range(self.location, aim_location, -1):
            self.driver.execute_script('window.scrollTo(0, '+ str(i*100) +')')
            time.sleep(self.time_interval)
        self.location = aim_location
        time.sleep(0.5)

    def zoon_in(self):
        aim_zoon = 1.5*self.zoon
        for i in np.arange(self.zoon,aim_zoon,0.1):
            self.driver.execute_script("document.body.style.zoom='"+ str(i) +"'")
            time.sleep(self.time_interval)
        self.zoon = aim_zoon
        time.sleep(0.5)

    def zoon_out(self):
        aim_zoon = 0.6*self.zoon
        for i in np.arange(self.zoon,aim_zoon,-0.1):
            self.driver.execute_script("document.body.style.zoom='"+ str(i) +"'")
            time.sleep(self.time_interval)
        self.zoon = aim_zoon
        time.sleep(0.5)

    def minimal(self):
        self.driver.set_window_size(800, 720)
        self.location = 0
        self.zoon = 1
        time.sleep(0.5)

    def maximal(self):
        self.driver.maximize_window()
        self.location = 0
        self.zoon = 1
        time.sleep(0.5)

if __name__ == '__main__':
    chrome_driver = "/Users/kylinchan/webdriver/chromedriver"
    entity = superbrowser(chrome_driver)
    entity.get_test_url()
    entity.wipe_down()
    entity.wipe_down()
    entity.wipe_up()
    entity.zoon_in()
    entity.zoon_in()
    entity.zoon_out()
    entity.maximal()
    entity.minimal()