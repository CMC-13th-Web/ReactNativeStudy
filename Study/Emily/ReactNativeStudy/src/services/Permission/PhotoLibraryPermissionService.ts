import { PERMISSIONS } from 'react-native-permissions';
import { PermissionService } from './PermissionService';
import { OS } from '../../models/Enums/OS';
import { Platform } from 'react-native';

export class PhotoLibraryPermissionService extends PermissionService {
  constructor() {
    super();
    this.key = this.getKey(Platform.OS as OS);
  }
  
  getKey = (os: OS) => {
    switch (os) {
      case OS.IOS:
        return PERMISSIONS.IOS.PHOTO_LIBRARY;
      case OS.Android:
        return PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
      default:
        throw Error("os is not defined");
    }
  };
}