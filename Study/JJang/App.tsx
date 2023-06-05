import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import {AlertScreen} from './src/screens/alert';
import {HomeScreen} from './src/screens/home';
import {MessageScreen} from './src/screens/message';
import {SearchScreen} from './src/screens/search';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="홈" component={HomeScreen} />
        <Stack.Screen name="알림" component={AlertScreen} />
        <Stack.Screen name="검색" component={SearchScreen} />
        <Stack.Screen name="메시지" component={MessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
