import React, { useState } from 'react';
import { View, Image, Button } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Image as ImagePicker } from 'react-native-image-crop-picker';
import { useSetRecoilState } from 'recoil';
import { images } from '../../recoil/atoms/images';
import Props from '../../models/Props';

export default function Assignment2_1({ navigation }: Props ) {
  const [openCamera, setOpenCamera] = useState<ImagePicker>();
  const setImagesValue = useSetRecoilState(images);

  const handleImageSelect = async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        mediaType: 'photo',
        cropping: true,
      });
      
      if (image) {
        setImagesValue(prev => [...prev, image.path]);
        navigation.navigate('SelectedPhotos');
      }
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
      <Button title="카메라로 촬영하기" onPress={handleCameraOpen} />
      <Button title="사진 선택하기" onPress={handleImageSelect} />
      {openCamera && <Image source={{ uri: openCamera.path }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}