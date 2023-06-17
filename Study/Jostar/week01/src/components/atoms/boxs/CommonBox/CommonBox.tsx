import { Size } from 'constants/styles';
import React from 'react';
import { View } from 'react-native';
import { commonBoxStyles } from './CommonBox.style';

interface Props {
  rounded: boolean;
  size: Size.SMALL | Size.MEDIUM | Size.LARGE;
  color: string;
}

const CommonBox = ({rounded, size, color}: Props) => {
  const boxStyles = commonBoxStyles(rounded, size, color);
  return (
    <View testID='commonBox' style={boxStyles.container}/>
  );
};

export default CommonBox;