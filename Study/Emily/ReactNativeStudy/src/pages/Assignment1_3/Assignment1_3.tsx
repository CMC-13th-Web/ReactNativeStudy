import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRecoilValue, useRecoilState } from 'recoil';
import { countState } from '../../recoil/atoms/count';
import { styles } from './Assignment1_3_StyleSheet';

export default function Assignment1_3() {
  const count = useRecoilValue(countState);
  const [countValue, setCountValue] = useRecoilState(countState);

  const incrementCount = () => {
    setCountValue(countValue+1);
  };

  const decrementCount = () => {
    setCountValue(countValue-1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <Button title="Increment" onPress={incrementCount} />
      <Button title="Decrement" onPress={decrementCount} />
    </View>
  );
}