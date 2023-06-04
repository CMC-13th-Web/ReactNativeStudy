import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Box from '../components/UI/Box';
import { Size } from '../models/Enums/Size';

type Props = {}

const Work1_2 = (props: Props) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Work1_2