import {PERMISSIONS, requestMultiple} from 'react-native-permissions';

//2. android 모든 권한 요청
export const requestAndroidPermissions = async () => {
  //권한 요청
  requestMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  ]).then(data => {
    console.log('request permissions(aos) result : ', data);
  });
};

//3. iOS 모든 권한 요청
export const requestiOSPermissions = async () => {
  requestMultiple([
    PERMISSIONS.IOS.CAMERA,
    PERMISSIONS.IOS.PHOTO_LIBRARY,
    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  ]).then(data => {
    console.log('request permissions(ios)', data);
  });
};
