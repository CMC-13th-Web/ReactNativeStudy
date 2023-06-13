import ImagePicker from 'react-native-image-crop-picker';

const useOpenGallery = async () => {
  try {
    const image = await ImagePicker.openPicker({
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

export default useOpenGallery;
