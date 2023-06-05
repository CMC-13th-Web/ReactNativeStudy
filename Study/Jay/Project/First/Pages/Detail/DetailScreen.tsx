import React, {useState} from 'react';
import {SafeAreaView, Button, View, TextInput} from 'react-native';
import styles from './DetailScreen.styles';
import BoxProps from './BoxProps';

function Box({color, rounded, size}: BoxProps) {
  const borderRadius = rounded ? 50 : 0;
  const boxSize = size === 'small' ? 50 : size === 'medium' ? 100 : 150;

  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: borderRadius,
        width: boxSize,
        height: boxSize,
      }}
    />
  );
}

function DetailsScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [color, setColor] = useState('blue');
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [rounded, setRounded] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {isVisible && <Box color={color} size={size} rounded={rounded} />}

      <Button
        title={isVisible ? 'Hide Box' : 'Show Box'}
        onPress={() => setIsVisible(!isVisible)}
      />

      <TextInput
        style={styles.input}
        onChangeText={setColor}
        value={color}
        placeholder="Enter color"
      />

      <TextInput
        style={styles.input}
        onChangeText={text => setSize(text as 'small' | 'medium' | 'large')}
        value={size}
        placeholder="Enter size (small, medium, large)"
      />

      <Button
        title={rounded ? 'Set Rounded: False' : 'Set Rounded: True'}
        onPress={() => setRounded(!rounded)}
      />
    </SafeAreaView>
  );
}

export default DetailsScreen;
