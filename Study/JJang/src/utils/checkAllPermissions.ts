import {Platform} from 'react-native';
import {check, PERMISSIONS} from 'react-native-permissions';
import {
  requestAndroidPermissions,
  requestiOSPermissions,
} from './requestAllPermissions';

//1. 권한 체크
export const checkAllPermissions = async (): Promise<void> => {
  if (Platform.OS === 'android') {
    await Promise.all([
      check(PERMISSIONS.ANDROID.CAMERA),
      check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE),
      check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE),
    ])
      .then(data => {
        console.log('check permissions(android)', data);
        data.map(value => {
          if (value !== 'granted') {
            if (value !== 'blocked') {
              requestAndroidPermissions();
            }
          }
        });
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {});
  } else {
    await Promise.all([
      check(PERMISSIONS.IOS.CAMERA),
      check(PERMISSIONS.IOS.PHOTO_LIBRARY),
    ])
      .then(data => {
        console.log('check permissions(ios) result : ', data);
        data.map(value => {
          if (value !== 'granted') {
            if (value !== 'blocked' && value !== 'unavailable') {
              requestiOSPermissions();
            }
          }
        });
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {});
  }
};
