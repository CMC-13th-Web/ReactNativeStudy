import React from 'react';
import {styled} from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddButton from './AddButton';
import ImagePicker, {Image} from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import {MainTabNavigationProp, RootStackNavigationProp} from 'screens/types';
import {usePhotoStore} from 'stores/PhotoStore';

const StyledView = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
  gap: 20;
`;

export default function AddScreen() {
  const stackNavigation = useNavigation<RootStackNavigationProp>();
  const tabNavigation = useNavigation<MainTabNavigationProp>();
  const {updatePhotos} = usePhotoStore();

  const handleCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
      });
      console.log(image);
      const croppedImage = await cropImage(image.path, 300, 400);
      console.log('Cropped image:', croppedImage);
    } catch (error) {
      console.log('Error selecting images:', error);
    } finally {
      tabNavigation.navigate('Feed');
    }
  };

  const handleImagePicker = async () => {
    try {
      const images = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        multiple: true,
        mediaType: 'photo',
      });
      stackNavigation.navigate('Preview');

      for (const image of images) {
        const croppedImage = await cropImage(image.path, 300, 400);
        console.log('Cropped image:', croppedImage);
      }
    } catch (error) {
      console.log('Error selecting images:', error);
    } finally {
      tabNavigation.navigate('Feed');
    }
  };

  const cropImage = (imagePath: string, width: number, height: number) => {
    return new Promise((resolve, reject) => {
      ImagePicker.openCropper({
        path: imagePath,
        width,
        height,
        freeStyleCropEnabled: true,
        includeBase64: true,
        cropperStatusBarColor: 'black',
        cropperToolbarColor: 'black',
        cropperToolbarWidgetColor: 'white',
        mediaType: 'photo',
        cropperCancelText: '취소',
        cropperChooseText: '선택',
      })
        .then((croppedImage: Image) => {
          resolve(croppedImage);
          updatePhotos(croppedImage);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StyledView>
        <AddButton iconName="camera-alt" onPress={handleCamera} />
        <AddButton iconName="photo-library" onPress={handleImagePicker} />
      </StyledView>
    </SafeAreaView>
  );
}
