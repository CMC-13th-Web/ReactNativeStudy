import { StyleSheet } from 'react-native';
import { Size } from '../../models/Enums/Size';

export const getBoxStyle = (
  isRounded: boolean,
  size: Size,
  color: string) => 
  StyleSheet.create({
    box: {
      width: getLength(size),
      height: getLength(size),
      backgroundColor: color,
      borderRadius: isRounded ? 20 : 0
    },
  });

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    marginBottom: 20,
  },
});

const getLength = (size: Size) => {
  switch (size) {
    case Size.Small:
      return 50;
    case Size.Medium:
      return 100;
    case Size.Large:
      return 150;
    default:
      return 100;
  }
};