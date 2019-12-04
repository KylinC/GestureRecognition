from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
import time
from selenium.webdriver.common.keys import Keys

chrome_driver = "/home/ding/Downloads/chromedriver_linux64/chromedriver"

driver = webdriver.Chrome(executable_path = chrome_driver)

# driver.get("http://www.baidu.com")

# driver.find_element_by_id("kw").send_keys("selenium")
# driver.find_element_by_id("su").click()
# driver.execute_script("window.scrollTo(100, document.body.scrollHeight);")
# time.sleep(3)
# driver.back()
# time.sleep(3)
# driver.forward()

driver.get("https://www.csdn.net")
# 等待页面加载3S 
time.sleep(3)
 
#将页面滚动条拖到底部
for i in range(100):
    driver.execute_script('window.scrollTo(0, '+ str(i*100) +')')
    ActionChains(driver).key_down(Keys.DOWN).perform()
    time.sleep(0.1)