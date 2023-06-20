import {PERMISSIONS, check, request} from 'react-native-permissions';
import {Platform} from 'react-native';

export const requestPermissions = async (): Promise<boolean> => {
  try {
    const permission = getLocationPermission();
    if (!permission) {
      throw Error('Unsupported platform');
    }
    const permissionResult = await check(permission);

    switch (permissionResult) {
      case 'denied':
        const requested = await request(permission);
        if (requested === 'granted') {
          return true;
        }
        return false;
      case 'granted':
      case 'limited':
        return true;
      case 'blocked':
      case 'unavailable':
      default:
        return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getLocationPermission = () => {
  return Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  });
};
