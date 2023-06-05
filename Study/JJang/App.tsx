import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="alert" component={AlertScreen} />
        <Stack.Screen name="search" component={SearchScreen} />
        <Stack.Screen name="message" component={MessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
