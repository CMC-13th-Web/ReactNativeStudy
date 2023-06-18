import { createContext } from "react";

export const Context = createContext({
  setDialog: (dialogText: string, isShow: boolean) => {},
});
