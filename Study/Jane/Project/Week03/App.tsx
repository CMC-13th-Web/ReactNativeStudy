/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from 'screens/RootStack';
import {requestPermissions} from 'services/permission.service';
import {usePermissionStore} from 'stores/permissionStore';

function App() {
  const {updateLocationPermission} = usePermissionStore();

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const permissionResult = await requestPermissions();
        updateLocationPermission(permissionResult);
      } catch (error) {
        console.warn('Error requesting location permission:', error);
      }
    };

    requestLocationPermission();
  }, []);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
