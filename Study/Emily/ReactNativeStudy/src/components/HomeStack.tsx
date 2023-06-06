import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Assignment1_2 from '../pages/Assignment1_2/Assignment1_2';
import Assignment1_3 from '../pages/Assignment1_3/Assignment1_3';
import Assignment1_4 from '../pages/Assignment1_4/Assignment1_4';

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
      <Stack.Screen name="Assignment1_2" component={Assignment1_2} options={{
        title: '과제1-2'
      }} />
      <Stack.Screen name="Assignment1_3" component={Assignment1_3} options={{
        title: '과제1-3'
      }} />
      <Stack.Screen name="Assignment1_4" component={Assignment1_4} options={{
        title: '과제1-4'
      }}/>
    </Stack.Navigator>
  )
}

export default HomeStack