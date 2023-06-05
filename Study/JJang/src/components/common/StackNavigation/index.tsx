import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../../screens/home';
import {AlertScreen} from '../../../screens/alert';
import {SearchScreen} from '../../../screens/search';
import {MessageScreen} from '../../../screens/message';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="홈" component={HomeScreen} />
      <Stack.Screen name="알림" component={AlertScreen} />
      <Stack.Screen name="검색" component={SearchScreen} />
      <Stack.Screen name="메시지" component={MessageScreen} />
    </Stack.Navigator>
  );
};
