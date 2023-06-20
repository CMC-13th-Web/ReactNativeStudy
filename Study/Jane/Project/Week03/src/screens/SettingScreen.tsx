import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import {RootStackNavigationProp} from './types';
import lockStorage from 'stores/lockStorage';
import {useLockStore} from 'stores/lockStore';

export default function SettingScreen() {
  const {lock, updateLockState} = useLockStore();

  const navigation = useNavigation<RootStackNavigationProp>();

  const toggleSwitch = async () => {
    if (lock.hasLock) {
      updateLockState({hasLock: false, pin: null});
      await lockStorage.clear();
    } else {
      navigation.navigate('Lock', {type: 'LOCK'});
    }
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#3834ff'}}
        thumbColor={lock.hasLock ? '#ffffff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={lock.hasLock}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
