import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, View} from 'react-native';

import {RootStackParamList} from '../../types/stack';

const DetailScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Button title="다음" />
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
      <Button
        title="처음으로"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
};

export default DetailScreen;
