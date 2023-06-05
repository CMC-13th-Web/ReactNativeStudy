import React from 'react';
import {Button, Text, View} from 'react-native';
import {MainTabNavigationProp} from 'navigation/MainTab';

type HomeScreenProps = {
  navigation: MainTabNavigationProp;
};

function HomeScreen({navigation}: HomeScreenProps) {
  const onPress = () => {
    navigation.navigate('Detail', {id: 1});
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="상세보기" onPress={onPress} />
    </View>
  );
}

export default HomeScreen;
