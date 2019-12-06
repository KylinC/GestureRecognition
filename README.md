# GestureRecognition
>  SJTU-CS386 Project, CV gesture recognition with Realsense.

[![](https://img.shields.io/badge/version-1.0.0-blue.svg)]()

[![](https://img.shields.io/badge/python-3.5.7-blue.svg)]()

[![](https://img.shields.io/badge/Torch-1.0-orange)]()



## Introduction

Supported by **Intel** Realsense and Pytorch, we developed a segmentation + CRNN model to classify online gesture video. We also achieve a demo where one can handle his or her *Chrome Browser* by gesture. 



## Dataset

<img src="http://kylinhub.oss-cn-shanghai.aliyuncs.com/2019-12-06-all_frames.jpg" width="50%" height="50%" />

We use **Realsense** to record 14 actions of different gesture videos, which have various time lengths (frames) and all resized to 64x64 2d image size, 4 Channels (B,G,R,Depth) are included. 

[Data Click Here](https://github.com/KylinC/GestureRecognition/tree/master/data)  



## Model

- **Depth-Based Segmentation**

The videos **RealSense** get actually are (B,G,R) and (Depth) images sequence, so we first use Depth information to handle segmantation on (B,G,R) images, which makes images remain gesture parts while others become 0(black pixel).

The threshold should adapt to the test environment.



- **Deep CNN + LSTM**

We use a composed model based on CNN and LSTM, which means we want CNN to handle image information while use LSTM last hidden output to get video time-sequence imformation. Mostly, CNN + LSTM can handle the various size and time length video, which can be another benefit, overall.


![](http://kylinhub.oss-cn-shanghai.aliyuncs.com/2019-12-06-GS.jpg)



## View

- **Online Gesture Recognition**

<img src="http://kylinhub.oss-cn-shanghai.aliyuncs.com/2019-12-06-demo2_1.gif" width="80%" height="80%" />


- **Chrome Handler**

<img src="http://kylinhub.oss-cn-shanghai.aliyuncs.com/2019-12-06-sb.gif" width="80%" height="80%" />


## Launch

- Download and Install Dependency

```bash
git clone https://github.com/KylinC/GestureRecognition.git

# install requirements.txt
cd GestureRecognition
pip install requirements.txt
```

- Download **Chrome** Driver

click the website to download corresponding version: 

[**http://chromedriver.storage.googleapis.com/index.html**](http://chromedriver.storage.googleapis.com/index.html)

- Run the **Chrome Handler** Demo

```bash
python src/demo.py
```

## Performance

We "shuffle" the training data and give a batch input to the network to stable the loss and accuracy, we can find the model really works. 

<img src="http://kylinhub.oss-cn-shanghai.aliyuncs.com/2019-12-06-training_log.png" width="50%" height="50%" />

## realsense SR300 installation on Ubuntu18.04

- packages installation

```sh
sudo apt-get update && sudo apt-get upgrade && sudo apt-get dist-upgrade

sudo apt-get install git libssl-dev libusb-1.0-0-dev pkg-config libgtk-3-dev libglfw3-dev libgl1-mesa-dev libglu1-mesa-dev

# fetch the source code
git clone https://github.com/IntelRealSense/librealsense
cd librealsense

# build from source
mkdir build && cd build
cmake ..
cmake ../ -DBUILD_EXAMPLES=true
make && sudo make install

cd ..
sudo cp config/99-realsense-libusb.rules /etc/udev/rules.d
sudo udevadm control --reload-rules && udevadm trigger

## connect realsense sr300 to run demo
## ./build/examples/capture/rs-capture
```

- python API configuration

```sh
pip install pyrealsense2
```

<br/>

> View the source code on [https://github.com/KylinC/GestureRecognition](https://github.com/KylinC/GestureRecognition)