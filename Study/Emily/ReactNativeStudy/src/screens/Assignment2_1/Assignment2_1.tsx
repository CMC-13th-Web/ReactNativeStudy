import React, { useState } from 'react';
import { View, Image, Button } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Image as ImagePicker } from 'react-native-image-crop-picker';

type Props = {}

export default function Assignment2_1(props: Props) {
  const [selectedImage, setSelectedImage] = useState<ImagePicker>();
  const [openCamera, setOpenCamera] = useState<ImagePicker>();

  const handleImageSelect = async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        mediaType: 'photo',
        cropping: true,
      });
      
      image && setSelectedImage(image);
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  const handleCameraOpen = async () => {
    try {
      const image = await ImageCropPicker.openCamera({
        mediaType: 'photo',
        cropping: true,
      });
      setOpenCamera(image);
    } catch (error) {
      console.log('Error opening camera:', error);
    }
  };

  return (
    <View>
      <Button title="Select Image" onPress={handleImageSelect} />
      {selectedImage && <Image source={{ uri: selectedImage.path }} style={{ width: 200, height: 200 }} />}
      <Button title="Open Camera" onPress={handleCameraOpen} />
      {openCamera && <Image source={{ uri: openCamera.path }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}