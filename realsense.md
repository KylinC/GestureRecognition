

### realsense SR300 installation on Ubuntu18.04

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

```sh
pip install pyrealsense2
```

