import {Image} from 'react-native-image-crop-picker';
import {create} from 'zustand';

export interface PhotoState {
  photos: Image[];
  updatePhotos: (props: Image) => void;
}

export const usePhotoStore = create<PhotoState>(set => ({
  photos: [],
  updatePhotos: props => set(state => ({photos: [...state.photos, props]})),
}));
