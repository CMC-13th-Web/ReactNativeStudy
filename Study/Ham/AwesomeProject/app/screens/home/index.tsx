import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  Detail: {id: number} | undefined;
};

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="상세보기"
        onPress={() => navigation.navigate('Detail', {id: 1})}
      />
    </View>
  );
};

export default Home;
