import React, { useState } from 'react';
import { SafeAreaView, Button, View } from 'react-native';
import { Size } from '../../../models/Enums/Size';
import { getBoxStyle, styles } from './BoxStyleSheet';

type Props = {
  isRounded: boolean;
  size: Size;
  color: string;
}

export default function Box({ isRounded, size, color }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const boxStyles = getBoxStyle(isRounded, size, color, isVisible);

  return (
    <SafeAreaView style={styles.container}>
      <Button title={isVisible ? 'Hide Box' : 'Show Box'} onPress={toggleVisibility} />
      {isVisible && <View style={[styles.box, boxStyles.box]} />}
    </SafeAreaView>)
}