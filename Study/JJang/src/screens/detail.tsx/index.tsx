import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../components/common/StackNavigation';

export const DetailScreen = ({
  route,
}: {
  route: RouteProp<RootStackParamList, 'Detail'>;
}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text>id: {route.params?.id || ''}</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
      <Button title="처음으로" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
