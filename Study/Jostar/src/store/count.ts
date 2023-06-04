import { create } from "zustand";

interface CountState {
  count: number;
};

interface Store extends CountState {
  increaseCountState: () => void;
  decreaseCountState: () => void;
};

const initCountState = {
  count: 0
};


export const useCountStore = create<Store>()(
  set => ({
    ...initCountState,
    increaseCountState: () =>
      set((state: CountState) => ({
        count: state.count + 1
    })),
    decreaseCountState: () => 
      set((state: CountState) => ({
      count: state.count - 1
    }))
  })
);
