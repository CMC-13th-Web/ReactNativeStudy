import { PERMISSIONS } from 'react-native-permissions';
import { OS } from '../../models/Enums/OS';
import { PermissionService } from './PermissionService';
import { Platform } from 'react-native';

export class CameraPermissionService extends PermissionService {
  constructor() {
    super();
    this.key = this.getKey(Platform.OS as OS);
  }
  
  getKey = (os: OS) => {
    switch (os) {
      case OS.IOS:
        return PERMISSIONS.IOS.CAMERA;
      case OS.Android:
        return PERMISSIONS.ANDROID.CAMERA;
      default:
        throw Error("os is not defined");
    }
  };
}