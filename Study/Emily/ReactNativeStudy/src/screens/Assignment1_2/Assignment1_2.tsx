import React, { useState } from 'react';
import { View, TextInput, SafeAreaView, Button } from 'react-native';
import Box from '../../components/Box/Box';
import { Size } from '../../models/Enums/Size';
import { styles } from './Assignment1_2.style';

export default function Assignment1_2() {
  const [rounded, setRounded] = useState(false);
  const [size, setSize] = useState(Size.Medium);
  const [color, setColor] = useState('blue');
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <Button title={isVisible ? 'Hide Box' : 'Show Box'} onPress={toggleVisibility} />
      {isVisible && <Box isRounded={rounded} size={size} color={color} />}
    </SafeAreaView>
  )
}