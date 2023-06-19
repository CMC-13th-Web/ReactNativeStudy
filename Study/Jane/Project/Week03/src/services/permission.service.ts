import {PERMISSIONS, check, request} from 'react-native-permissions';
import {Platform} from 'react-native';

export const requestPermissions = async () => {
  try {
    const permission = getLocationPermission();
    if (!permission) {
      throw Error('Unsupported platform');
    }
    const permissionResult = await check(permission);

    if (permissionResult === 'denied') {
      request(permission);
    }
  } catch (error) {
    console.error(error);
  }
};

const getLocationPermission = () => {
  return Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  });
};
