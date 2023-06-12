import { Permission, check, request, RESULTS } from 'react-native-permissions';
import { OS } from '../../models/Enums/OS';

export class PermissionService {
  constructor() {}

  key: Permission | undefined;

  checkAndRequest = async () => {
    const checkResult = await this.check();

    if (checkResult === RESULTS.DENIED) {
      await this.request();
    }
  }
  
  check = async () => this.key && await check(this.key);
  request = async () => this.key && await request(this.key);
  getKey = (os: OS): Permission|undefined => undefined;
}