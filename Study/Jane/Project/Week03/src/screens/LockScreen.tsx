/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  MainTabNavigationProp,
  RootStackNavigationProp,
  RootStackParamList,
} from './types';
import lockStorage from 'stores/lockStorage';
import {useLockStore} from 'stores/lockStore';
import Digit from 'components/Digit';
import Pin from 'components/Pin';
import TouchID from 'react-native-touch-id';

type LockScreenRouteProp = RouteProp<RootStackParamList, 'Lock'>;

export default function LockScreen() {
  const {params} = useRoute<LockScreenRouteProp>();

  const stackNavigation = useNavigation<RootStackNavigationProp>();
  const tabNavigation = useNavigation<MainTabNavigationProp>();

  const [password, setPassword] = useState<Array<string>>([]);

  const {lock, updateLockState} = useLockStore();

  const handlePress = (type: number | '취소' | 'back' | 'bio') => {
    if (type === '취소') {
      setPassword([]);
      stackNavigation.goBack();
    } else if (type === 'back') {
      setPassword(password.slice(0, -1));
    } else if (type === 'bio') {
      TouchID.authenticate('to demo this react-native component')
        .then(() => {
          tabNavigation.navigate('Map');
        })
        .catch(() => {
          console.warn('Authentication Failed');
        });
    } else {
      setPassword([...password, String(type)]);
    }
  };

  useEffect(() => {
    if (password.length === 4) {
      if (params.type === 'LOCK') {
        Alert.alert('비밀번호가 설정되었습니다!');
        const str = JSON.stringify(password);
        lockStorage.set(str);
        updateLockState({hasLock: true, pin: str});
        setPassword([]);
        stackNavigation.goBack();
      } else {
        if (!lock.pin) return;
        const storedPin = JSON.parse(lock.pin);
        if (password.join('') === storedPin.join('')) {
          tabNavigation.navigate('Map');
        } else {
          setPassword([]);
        }
      }
    }
  }, [password]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>암호 입력</Text>
      <View style={styles.pin}>
        <Pin hasInput={password.length >= 1} />
        <Pin hasInput={password.length >= 2} />
        <Pin hasInput={password.length >= 3} />
        <Pin hasInput={password.length >= 4} />
      </View>
      <View style={styles.digitContainer}>
        <View style={styles.digitRow}>
          <Digit type={1} handlePress={() => handlePress(1)} />
          <Digit type={2} handlePress={() => handlePress(2)} />
          <Digit type={3} handlePress={() => handlePress(3)} />
        </View>
        <View style={styles.digitRow}>
          <Digit type={4} handlePress={() => handlePress(4)} />
          <Digit type={5} handlePress={() => handlePress(5)} />
          <Digit type={6} handlePress={() => handlePress(6)} />
        </View>
        <View style={styles.digitRow}>
          <Digit type={7} handlePress={() => handlePress(7)} />
          <Digit type={8} handlePress={() => handlePress(8)} />
          <Digit type={9} handlePress={() => handlePress(9)} />
        </View>
        <View style={styles.digitRow}>
          <Digit
            type={params.type === 'LOCK' ? '취소' : 'bio'}
            handlePress={() =>
              handlePress(params.type === 'LOCK' ? '취소' : 'bio')
            }
          />
          <Digit type={0} handlePress={() => handlePress(0)} />
          <Digit type="back" handlePress={() => handlePress('back')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#3834ff',
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 24,
  },
  pin: {
    flexDirection: 'row',
    marginVertical: 24,
    gap: 24,
  },
  digitContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    gap: 24,
  },
  digitRow: {
    flexDirection: 'row',
    marginVertical: 8,
    gap: 24,
  },
});
