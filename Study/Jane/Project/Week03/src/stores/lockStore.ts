import {create} from 'zustand';

type LockType = {
  hasLock: boolean;
  pin: string | null;
};

export interface LockState {
  lock: LockType;
  updateLockState: (props: LockType) => void;
}

export const useLockStore = create<LockState>(set => ({
  lock: {
    hasLock: false,
    pin: null,
  },
  updateLockState: props => set({lock: props}),
}));
