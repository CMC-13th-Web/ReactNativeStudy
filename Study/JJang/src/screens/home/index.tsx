// import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {Box} from '../../components/home/Box';

export const HomeScreen = () => {
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
        onPress={() => {
          // navigation.navigate();
        }}
      />
    </View>
  );
};
