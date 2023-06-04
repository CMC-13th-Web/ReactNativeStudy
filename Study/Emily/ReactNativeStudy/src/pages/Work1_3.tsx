import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRecoilValue, useRecoilState } from 'recoil';
import { countState } from '../recoil/atoms/count';

const Work1_3 = () => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 16,
  }
});

export default Work1_3