import { View, Text, Button } from 'react-native'
import React from 'react'
import { MainStackParamList } from '../navigations/MainStack';
import { RouteProp } from '@react-navigation/native';
import Props from '../models/Props';

interface DetailProps extends Props {
  route: RouteProp<MainStackParamList, 'Detail'>;
}

export default function Detail({ navigation, route }: DetailProps) {
  const { id } = route.params;

  const handleNextPage = () => {
    const nextId = id + 1;
    navigation.navigate('Detail', { id: nextId });
  }

  const handlePreviousPage = () => {
    const previousId = id - 1;
    previousId > 0 ? navigation.navigate('Detail', { id: previousId }) : navigateToHome();
  }

  const navigateToHome = () => {
    navigation.navigate('Home');
  }

  return (
    <View>
      <Text>Detail {id}</Text>
      <Button
        title="다음"
        onPress={handleNextPage}
      />
      <Button
        title="뒤로가기"
        onPress={handlePreviousPage}
      />
      <Button
        title="처음으로"
        onPress={navigateToHome}
      />
    </View>
  )
}