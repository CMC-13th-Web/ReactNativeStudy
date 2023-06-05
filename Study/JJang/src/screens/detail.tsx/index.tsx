import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../components/common/StackNavigation';

export const DetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {id} = route.params;

  return (
    <View>
      <Text>id: {id}</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
      <Button title="처음으로" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
