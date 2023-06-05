import React from 'react';
import {Button, Text, View} from 'react-native';

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="과제 1-2"
        onPress={() => navigation.navigate('과제 1-2')}
      />
    </View>
  );
}

export default HomeScreen;
