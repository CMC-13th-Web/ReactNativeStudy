import CounterCard from 'components/molecules/cards/CounterCard/CounterCard';
import React from 'react';
import { View } from 'react-native';
import { countScreenStyles } from './CountScreen.style';

const CountScreen = () => {
  return (
    <View style={countScreenStyles.container}>
      <CounterCard/>
    </View>
  );
};

export default CountScreen;