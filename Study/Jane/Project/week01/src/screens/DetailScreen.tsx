import React from 'react';
import {Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from 'navigation/RootStack';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

function DetailScreen() {
  const {params} = useRoute<DetailScreenRouteProp>();

  return (
    <View>
      <Text>id {params.id}</Text>
    </View>
  );
}

export default DetailScreen;
