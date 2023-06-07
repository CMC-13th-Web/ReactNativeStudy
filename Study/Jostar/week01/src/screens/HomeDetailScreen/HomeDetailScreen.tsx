import React from 'react';
import { View, Text } from 'react-native';
import { homeDetailScreenStyles } from './HomeDetailScreen.style';

const HomeDetailScreen = () => {
  return (
    <View style={homeDetailScreenStyles.container}>
      <Text>홈화면 상세보기 페이지입니다.</Text>
    </View>
  );
};

export default HomeDetailScreen;