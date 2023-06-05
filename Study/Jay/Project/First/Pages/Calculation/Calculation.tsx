// Calculation.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';
import useStore from '../../Store/Store';

function Calculation() {
  const {count, increment, decrement, reset} = useStore();

  return (
    <View>
      <Text>계산기: {count}</Text>
      <Button title="+1" onPress={increment} />
      <Button title="-1" onPress={decrement} />
      <Button title="Reset" onPress={reset} />
    </View>
  );
}

export default Calculation;
