import { atom } from 'recoil';

export const images = atom({
  key: 'images',
  default: [] as string[]
})