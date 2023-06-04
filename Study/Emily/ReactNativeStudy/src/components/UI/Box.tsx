import React, { useState } from 'react';
import { SafeAreaView, Button, View, StyleSheet } from 'react-native';
import { Size } from '../../models/Enums/Size';

type Props = {
  isRounded: boolean;
  size: Size;
  color: string;
}

const Box = ({ isRounded, size, color }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const boxStyles = StyleSheet.create({
  box: {
      width: getSizeValue(size),
      height: getSizeValue(size),
      backgroundColor: color,
      borderRadius: isRounded ? 10 : 0,
      display: isVisible ? 'flex' : 'none',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Button title={isVisible ? 'Hide Box' : 'Show Box'} onPress={toggleVisibility} />
      {isVisible && <View style={[styles.box, boxStyles.box]} />}
    </SafeAreaView>)
}
  
const getSizeValue = (size: Size) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    marginBottom: 20,
  },
});

export default Box