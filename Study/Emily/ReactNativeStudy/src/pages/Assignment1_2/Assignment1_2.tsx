import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Box from '../../components/UI/Box/Box';
import { Size } from '../../models/Enums/Size';
import { styles } from './Assignment1_2_StyleSheet';

export default function Assignment1_2() {
  const [rounded, setRounded] = useState(false);
  const [size, setSize] = useState(Size.Medium);
  const [color, setColor] = useState('blue');

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Rounded (true or false)"
          onChangeText={(value) => setRounded(value.toLowerCase() === 'true')}
        />
        <TextInput
          style={styles.input}
          placeholder="Size (small, medium, large)"
          onChangeText={(value) => setSize(value.toLowerCase() as Size)}
        />
        <TextInput
          style={styles.input}
          placeholder="Color (e.g., blue, red)"
          onChangeText={(value) => setColor(value.toLowerCase())}
        />
      </View>
      <Box isRounded={rounded} size={size} color={color} />
    </View>
  )
}