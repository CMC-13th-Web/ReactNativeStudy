import {PermissionsAndroid, Platform} from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  check,
  requestMultiple,
} from 'react-native-permissions';

const requestPermissions = async () => {
  if (Platform.OS === 'android') {
    try {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      const galleryPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );

      if (
        cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
        galleryPermission === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Camera and gallery permissions granted');
      } else {
        requestMultiple([
          PERMISSIONS.IOS.CAMERA,
          PERMISSIONS.IOS.PHOTO_LIBRARY,
        ]);
      }
    } catch (error) {
      console.log('Error requesting permissions: ', error);
    }
  } else {
    try {
      const cameraPermission = await check(PERMISSIONS.IOS.CAMERA).then(
        res => res,
      );
      const galleryPermission = await check(PERMISSIONS.IOS.PHOTO_LIBRARY).then(
        res => res,
      );

      if (
        cameraPermission === RESULTS.GRANTED &&
        galleryPermission === RESULTS.GRANTED
      ) {
        console.log('Camera and gallery permissions granted');
      } else {
        requestMultiple([
          PERMISSIONS.IOS.CAMERA,
          PERMISSIONS.IOS.PHOTO_LIBRARY,
        ]);
      }
    } catch (error) {
      console.log('Error requesting permissions: ', error);
    }
  }
};

export default requestPermissions;
