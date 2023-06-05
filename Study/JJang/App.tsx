import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';

import {AlertScreen} from './src/screens/alert';
import {HomeScreen} from './src/screens/home';
import {MessageScreen} from './src/screens/message';
import {SearchScreen} from './src/screens/search';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="홈">
        <Tab.Screen
          name="홈"
          component={HomeScreen}
          options={{
            title: '홈',
          }}
        />
        <Tab.Screen
          name="알림"
          component={AlertScreen}
          options={{
            title: '알림',
          }}
        />
        <Tab.Screen
          name="검색"
          component={SearchScreen}
          options={{
            title: '검색',
          }}
        />
        <Tab.Screen
          name="메시지"
          component={MessageScreen}
          options={{
            title: '메시지',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
