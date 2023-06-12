import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {RootStackParamList} from '../../components/common/StackNavigation';
import {Box} from '../../components/home/Box';

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [isBoxVisible, setIsBoxVisible] = useState<boolean>(true);

  return (
    <View>
      <Button
        title="토글"
        onPress={() => {
          setIsBoxVisible(!isBoxVisible);
        }}
      />
      <Box size="small" color="black" isBoxVisible={isBoxVisible} rounded />
      <Button
        title="Detail"
        onPress={() => navigation.navigate('Detail', {id: 1})}
      />
    </View>
  );
};
