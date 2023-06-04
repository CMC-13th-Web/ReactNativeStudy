import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Work1_2 from '../pages/Work1_2';
import Work1_3 from '../pages/Work1_3';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        title: '홈'
      }} />
      <Stack.Screen name="Detail" component={Detail} options={{
        title: '상세보기'
      }} />
      <Stack.Screen name="Work1_2" component={Work1_2} options={{
        title: '과제1_2'
      }} />
      <Stack.Screen name="Work1_3" component={Work1_3} options={{
        title: '과제1_3'
      }}/>
    </Stack.Navigator>
  )
}

export default HomeStack