import React from 'react';
import {Button, Text, View} from 'react-native';

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="상세보기"
        onPress={() => navigation.navigate('상세보기')}
      />
    </View>
  );
}

export default HomeScreen;
