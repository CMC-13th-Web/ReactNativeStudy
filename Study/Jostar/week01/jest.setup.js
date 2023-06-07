// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import { act } from 'react-dom/test-utils';
const {create: actualCreate} = jest.requireActual('zustand'); // if using jest
import '@testing-library/jest-native'; 

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set();

// when creating a store, we get its initial state, create a reset function and add it in the set
export const create = createState => {
  const store = actualCreate(createState);
  const initialState = store.getState();
  storeResetFns.add(() => store.setState(initialState, true));
  return store;
};

// Reset all stores after each test run
beforeEach(() => {
  act(() => storeResetFns.forEach(resetFn => resetFn()));
});