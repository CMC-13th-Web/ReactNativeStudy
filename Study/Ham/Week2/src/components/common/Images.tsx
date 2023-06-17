import React, {useState} from 'react';
import {Button, Image, View} from 'react-native';
import {useCameraPermissions} from '../../hooks/useCameraPermissions';
import ImagePicker from 'react-native-image-crop-picker';

const Images = () => {
  const check = useCameraPermissions({
    title: '카메라 권한 요청',
    message: '카메라 접근을 허용해주세요.',
    buttonPositive: '확인',
  });
  check.requestPermission();

  const [img, setImg] = useState<string | null>(null);

  const handlePressOpenCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });
      setImg(image?.path);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handlePressOpenGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      setImg(image?.path);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return (
    <View>
      {img && <Image source={{uri: img}} style={{width: 300, height: 300}} />}
      <Button title="카메라로 설정하기" onPress={handlePressOpenCamera} />
      <Button title="사진 선택하기" onPress={handlePressOpenGallery} />
    </View>
  );
};

export default Images;
