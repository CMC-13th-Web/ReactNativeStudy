import { PERMISSIONS, Permission, RESULTS, checkMultiple, requestMultiple } from 'react-native-permissions';
import { Permissions } from '../../models/Enums/Permissions';
import { OS } from '../../models/Enums/OS';
import { Platform } from 'react-native';

export const requestPermissions = async () => {
  try {
    const permissions = Object.values(Permissions);

    const permissionKeys = permissions.map((p) => PermissionFactory(p)) as Permission[];
    const checkResults = await checkMultiple(permissionKeys);

    const requestKeys = permissionKeys.filter(p => checkResults[p] === RESULTS.DENIED);
    await requestMultiple(requestKeys);
  } catch (error) {
    console.error(error);
  }
};

const PermissionFactory = (type: string) => {
  switch (type) {
    case Permissions.Camera:
      return getCameraPermission();
    case Permissions.PhotoLibrary:
      return getPhotoLibraryPermissionKey();
    default:
      return undefined;
  }
}

const getCameraPermission = (): Permission => {
  switch (Platform.OS) {
    case OS.IOS:
      return PERMISSIONS.IOS.CAMERA;
    case OS.Android:
      return PERMISSIONS.ANDROID.CAMERA;
    default:
      throw Error("os is not defined");
  }
};

const getPhotoLibraryPermissionKey = (): Permission => {
  switch (Platform.OS) {
    case OS.IOS:
      return PERMISSIONS.IOS.PHOTO_LIBRARY;
    case OS.Android:
      return PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
    default:
      throw Error("os is not defined");
  }
};