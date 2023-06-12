import React from 'react';
import { Size } from '../../models/Enums/Size';
import { getBoxStyle, styles } from './Box.style';
import { View } from 'react-native';

interface BoxProps {
  isRounded: boolean;
  size: Size;
  color: string;
}

export default function Box({ isRounded, size, color }: BoxProps) {
  const boxStyles = getBoxStyle(isRounded, size, color);

  return <View style={[styles.box, boxStyles.box]} />
}