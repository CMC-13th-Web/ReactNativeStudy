import CounterCard from 'components/molecules/cards/CounterCard/CounterCard';
import React from 'react';
import { View } from 'react-native';
import { notificationScreenStyles } from './NotificationScreen.style';

const NotificationScreen = () => {
  return (
    <View style={notificationScreenStyles.container}>
      <CounterCard/>
    </View>
  );
};

export default NotificationScreen;