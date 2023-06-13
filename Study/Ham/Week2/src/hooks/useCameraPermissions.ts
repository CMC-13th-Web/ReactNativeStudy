import {useCallback} from 'react';
import {Platform, Rationale} from 'react-native';
import {
  check,
  request,
  openSettings,
  PERMISSIONS,
  PermissionStatus,
  RESULTS,
} from 'react-native-permissions';

interface CameraPermission {
  checkPermission: () => Promise<PermissionStatus | null>;
  requestPermission: () => Promise<PermissionStatus | null>;
  openSettings: typeof openSettings;
}

// Android
export const useAndroidCameraPermissions = (
  requestRationale: Rationale,
): CameraPermission => {
  const checkCameraPermission = async () => {
    try {
      const fineLocationStatus = await check(PERMISSIONS.ANDROID.CAMERA);
      return fineLocationStatus;
    } catch (error) {
      console.error('Android: checkCameraPermission error', error);
      return null;
    }
  };

  const requestCameraPermission = useCallback(async () => {
    try {
      const result = await checkCameraPermission();
      if (result === RESULTS.DENIED) {
        const permissionStatus = await request(
          PERMISSIONS.ANDROID.CAMERA,
          requestRationale,
        );
        return permissionStatus;
      } else {
        return result;
      }
    } catch (error) {
      console.error('Android: requestCameraPermission error', error);
      return null;
    }
  }, [requestRationale]);

  return {
    checkPermission: checkCameraPermission,
    requestPermission: requestCameraPermission,
    openSettings,
  };
};

// iOS
export const useIosCameraPermissions = (
  requestRationale: Rationale,
): CameraPermission => {
  const checkCameraPermission = async () => {
    try {
      const cameraStatus = await check(PERMISSIONS.IOS.CAMERA);
      return cameraStatus;
    } catch (error) {
      console.error('iOS: checkCameraPermission error', error);
      return null;
    }
  };

  const requestCameraPermission = useCallback(async () => {
    try {
      const result = await checkCameraPermission();
      if (result === RESULTS.DENIED) {
        const cameraStatus = await request(
          PERMISSIONS.IOS.CAMERA,
          requestRationale,
        );
        return cameraStatus;
      } else {
        return result;
      }
    } catch (error) {
      console.error('iOS: requestCameraPermission error', error);
      return null;
    }
  }, [requestRationale]);

  return {
    checkPermission: checkCameraPermission,
    requestPermission: requestCameraPermission,
    openSettings,
  };
};

export const useCameraPermissions = Platform.select({
  android: useAndroidCameraPermissions,
  ios: useIosCameraPermissions,
  default: useAndroidCameraPermissions,
});
