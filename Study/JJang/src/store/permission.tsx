import {atom} from 'recoil';

const permissionState = atom({
  key: 'permissionState',
  default: false,
});

export default permissionState;
