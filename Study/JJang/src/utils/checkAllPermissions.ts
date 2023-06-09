import {check, PERMISSIONS} from 'react-native-permissions';

type OSType = 'android' | 'ios';

//1. 권한 체크
export const checkAllPermissions = async (os: OSType): Promise<boolean> => {
  let isChecked = true;
  if (os === 'android') {
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
              isChecked = false;
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
        // console.log('data[3] (APP_TRACKING_TRANSPARENCY) : ', data[3]);
        data.map(value => {
          if (value !== 'granted') {
            if (value !== 'blocked' && value !== 'unavailable') {
              isChecked = false;
            }
          }
        });
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        console.log('isChecked', isChecked);
      });
  }
  return isChecked; // TODO 리턴 받은 체크값으로 체크 상태 업데이트 해 주기
};
