import { atom, selector } from 'recoil';

export const countState = atom({
  key: 'countState',
  default: 0,
});