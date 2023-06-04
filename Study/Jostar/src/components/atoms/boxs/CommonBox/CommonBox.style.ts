import { Size } from "constants/styles";
import { StyleSheet } from "react-native";

export const makeSizeNumber = (size: Size.SMALL | Size.MEDIUM | Size.LARGE): number => {
  switch (size) {
    case Size.SMALL:
      return 20;
    case Size.MEDIUM:
      return 40;
    case Size.LARGE:
      return 60;
  }
}

export const commonBoxStyles = (
  rounded: boolean,
  size: Size.SMALL | Size.MEDIUM | Size.LARGE,
  color: string
) => StyleSheet.create({
  container: {
    borderRadius: rounded ? 20 : 0,
    width: makeSizeNumber(size),
    height: makeSizeNumber(size),
    backgroundColor: color
  }
});
