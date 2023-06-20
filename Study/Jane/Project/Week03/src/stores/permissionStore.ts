import {create} from 'zustand';

export interface PermissionState {
  hasLocationPermission: boolean;
  updateLocationPermission: (props: boolean) => void;
}

export const usePermissionStore = create<PermissionState>(set => ({
  hasLocationPermission: false,
  updateLocationPermission: props => set({hasLocationPermission: props}),
}));
