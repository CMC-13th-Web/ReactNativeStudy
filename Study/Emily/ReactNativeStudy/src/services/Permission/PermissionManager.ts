import { Permissions } from '../../models/Enums/Permissions';
import { PermissionFactory } from './PermissionFactory';

export const requestPermissions = async () => {
  try {
    const permissions = Object.values(Permissions);
    permissions.map(async (p) => {
      const permissionService = PermissionFactory(p);
      await permissionService?.checkAndRequest();
    })

  } catch (error) {
    console.error(error);
  }
};