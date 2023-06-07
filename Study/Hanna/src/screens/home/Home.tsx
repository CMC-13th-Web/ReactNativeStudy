import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import RequestPermission from '../../components/permission/requestPermission';

const Home = () => {
  useEffect(() => {
    RequestPermission();
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
