import React, {useEffect, useState} from 'react';
import {Button, Image, Platform, View} from 'react-native';
import RequestPermission from '../../components/permission/RequestPermission';
import {
  ImagePickerResponse,
  MediaType,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import UploadImageModal from '../../components/Modal/UploadImageModal';

const Home = () => {
  const [imageSource, setImageSource] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const options = {
    mediaType: 'photo' as MediaType,
    maxWidth: 800,
    maxHeight: 800,
    includeBase64: Platform.OS === 'android',
  };

  const handleOpenCamera = () => {
    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled camera capture');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        if (selectedImage.uri) {
          // selectedImage.uri가 undefined인 경우에도 setImageSource를 호출하면 안됨
          setImageSource(selectedImage.uri);
        }
      }
    });
  };

  const handleOpenGallery = () => {
    launchImageLibrary(options, response => {
      if (!response.didCancel && response.assets) {
        const selectedImage = response.assets[0];
        if (selectedImage.uri) {
          setImageSource(selectedImage.uri);
        }
      }
    });
  };

  const handleOpenModal = () => {
    if (Platform.OS === 'android') {
      setOpenModal(true);
      setImageSource(null);
    }
  };

  useEffect(() => {
    RequestPermission();
  }, []);

  return (
    <>
      <View>
        {imageSource ? (
          <Image
            source={{uri: imageSource}}
            style={{width: 300, height: 300}}
          />
        ) : (
          <>
            <UploadImageModal
              visible={openModal}
              onClose={() => setOpenModal(false)}
              onCamera={handleOpenCamera}
              onGallery={handleOpenGallery}
            />
          </>
        )}
        <Button title="Upload" onPress={handleOpenModal} />
      </View>
    </>
  );
};

export default Home;
