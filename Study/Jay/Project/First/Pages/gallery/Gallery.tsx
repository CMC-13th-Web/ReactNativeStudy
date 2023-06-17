import React, {useState} from 'react';
import {Button, Image, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {styles} from './Gallery.styles';

const Gallery = () => {
  // 사진의 URI를 저장하기 위한 state를 설정합니다
  const [image, setImage] = useState<string | null>(null);

  // '사진 선택하기' 버튼을 눌렀을 때의 동작을 정의합니다
  const handleSelectPress = async () => {
    // 사진 라이브러리 접근 권한을 체크합니다
    let photoPermission = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);

    // 권한이 없다면 권한을 요청합니다
    if (photoPermission !== RESULTS.GRANTED) {
      photoPermission = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    }

    // 권한이 있다면 사진 라이브러리를 열고 사진을 선택하게 합니다
    if (photoPermission === RESULTS.GRANTED) {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(selectedImage => {
        // 선택한 이미지를 resizeAndSetImage 함수에 전달합니다
        resizeAndSetImage(selectedImage);
      });
    } else {
      console.log('Photo library permission not granted');
    }
  };

  // '사진 찍기' 버튼을 눌렀을 때의 동작을 정의합니다
  const handleCameraPress = async () => {
    // 카메라 접근 권한을 체크합니다
    let cameraPermission = await check(PERMISSIONS.IOS.CAMERA);

    // 권한이 없다면 권한을 요청합니다
    if (cameraPermission !== RESULTS.GRANTED) {
      cameraPermission = await request(PERMISSIONS.IOS.CAMERA);
    }

    // 권한이 있다면 카메라를 열고 사진을 찍을 수 있게 합니다
    if (cameraPermission === RESULTS.GRANTED) {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(takenImage => {
        // 찍은 이미지를 resizeAndSetImage 함수에 전달합니다
        resizeAndSetImage(takenImage);
      });
    } else {
      console.log('Camera permission not granted');
    }
  };

  // 선택한 사진 또는 찍은 사진을 리사이징하고 상태를 업데이트하는 함수입니다
  const resizeAndSetImage = (pickedImage: any) => {
    ImageResizer.createResizedImage(pickedImage.path, 500, 500, 'JPEG', 100)
      .then(resizedImage => {
        // 이미지를 리사이징한 후, 상태를 업데이트합니다
        setImage(resizedImage.uri);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      {/* 선택하거나 찍은 사진이 있으면 화면에 표시합니다 */}
      {image && <Image source={{uri: image}} style={styles.image} />}
      <Button title="사진 찍기" onPress={handleCameraPress} />
      <Button title="사진 선택하기" onPress={handleSelectPress} />
    </View>
  );
};

export default Gallery;
