# `CPP` refers to Configured PiPeline

import pyrealsense2 as rs
import numpy as np 
import cv2

class CPP:
    def __init__(self):
        self.pipeline = rs.pipeline()
        self.config = rs.config()
        self.config.enable_stream(rs.stream.depth,
                                  width=640,
                                  height=480,
                                  format=rs.format.z16,
                                  framerate=60)
        self.config.enable_stream(rs.stream.color,
                                  width=640,
                                  height=480,
                                  format=rs.format.bgr8,
                                  framerate=60)

    def start(self):
        # start streaming
        self.profile = self.pipeline.start(self.config)

        # remove bg more than certain distance
        depth_sensor = self.profile.get_device().first_depth_sensor()
        depth_scale = depth_sensor.get_depth_scale()
        clipping_distance_in_meters = 0.5  #0.5 meter
        self.clipping_distance = clipping_distance_in_meters / depth_scale

        # align depth to color
        align_to = rs.stream.color
        self.align = rs.align(align_to)

    def stop(self):
        self.pipeline.stop()

    def cd(self):
        # get depth and color
        frames = self.pipeline.wait_for_frames()
        aligned_frames = self.align.process(frames)

        aligned_depth_frame = aligned_frames.get_depth_frame()
        color_frame = aligned_frames.get_color_frame()
        if not aligned_depth_frame or not color_frame:
            return None, None 

        depth_image = np.asanyarray(aligned_depth_frame.get_data())
        color_image = np.asanyarray(color_frame.get_data())

        # remove bg
        depth_image_3d = np.dstack(
            (depth_image, depth_image,
             depth_image))  #depth image is 1 channel, color is 3 channels
        bg_removed_color_image = np.where(
            (depth_image_3d > self.clipping_distance) | (depth_image_3d <= 0), 0,
            color_image)
        bg_removed_depth_image = np.where(
            (depth_image > self.clipping_distance) | (depth_image <= 0), 0,
            depth_image)

        return bg_removed_color_image, bg_removed_depth_image

