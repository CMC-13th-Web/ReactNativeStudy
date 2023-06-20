/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackNavigationProp, RootStackParamList} from './types';
import MainTab from './MainTab';
import LockScreen from './LockScreen';
import {useLockStore} from 'stores/lockStore';
import {useNavigation} from '@react-navigation/native';
import lockStorage from 'stores/lockStorage';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const {updateLockState} = useLockStore();

  const navigation = useNavigation<RootStackNavigationProp>();

  const fetchLock = async () => {
    const pin = await lockStorage.get();
    if (pin) {
      updateLockState({hasLock: true, pin});
      navigation.navigate('Lock', {type: 'UNLOCK'});
    } else {
      updateLockState({hasLock: false, pin: null});
    }
  };

  useEffect(() => {
    fetchLock();
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerBackTitle: '닫기'}}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Lock"
        component={LockScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
