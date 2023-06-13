import ImagePicker from 'react-native-image-crop-picker';

const useOpenCamera = async () => {
  try {
    const image = await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    });
    return image;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default useOpenCamera;
