import { Permissions } from '../../models/Enums/Permissions';
import { CameraPermissionService } from './CameraPermissionService';
import { PhotoLibraryPermissionService } from './PhotoLibraryPermissionService';

export function PermissionFactory(type: string) {
  switch (type) {
    case Permissions.Camera:
      return new CameraPermissionService();
    case Permissions.PhotoLibrary:
      return new PhotoLibraryPermissionService();
    default:
      return undefined;
  }
}