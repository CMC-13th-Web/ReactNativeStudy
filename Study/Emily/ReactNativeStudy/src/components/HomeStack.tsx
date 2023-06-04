import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        title: '홈'
      }} />
      <Stack.Screen name="Detail" component={Detail} options={{
        title: '상세보기'
      }}/>
    </Stack.Navigator>
  )
}

export default HomeStack