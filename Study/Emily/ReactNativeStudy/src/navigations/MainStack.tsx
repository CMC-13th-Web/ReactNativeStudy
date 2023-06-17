import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Detail from '../screens/Detail';
import Assignment1_2 from '../screens/Assignment1_2/Assignment1_2';
import Assignment1_3 from '../screens/Assignment1_3/Assignment1_3';
import Assignment1_4 from '../screens/Assignment1_4/Assignment1_4';
import Assignment2_1 from '../screens/Assignment2_1/Assignment2_1';
import BottomTab, { BottomTabNavigationProps } from './BottomTab';
import SelectedPhotos from '../screens/Assignment2_1/SelectedPhotos';

export type MainStackParamList = {
  BottomTab: BottomTabNavigationProps,
  Detail: { id: number },
  Assignment1_2: undefined,
  Assignment1_3: undefined,
  Assignment1_4: undefined,
  Assignment2_1: undefined,
  SelectedPhotos: undefined
}

export type MainStackNavigationProp = StackNavigationProp<MainStackParamList>;

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTab" component={BottomTab} options={{
        title: '홈',
        headerShown: false
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
      }} />
      <Stack.Screen name="Assignment2_1" component={Assignment2_1} options={{
        title: '과제2-1'
      }} />
      <Stack.Screen name="SelectedPhotos" component={SelectedPhotos}/>
    </Stack.Navigator>
  )
}

export default MainStack