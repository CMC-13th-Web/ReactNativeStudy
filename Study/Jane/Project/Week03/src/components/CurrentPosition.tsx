import React from 'react';
import {StyleSheet, View, TouchableOpacity, Platform} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  handlePress: () => void;
}

export default function CurrentPosition({handlePress}: Props) {
  const containerStyle = [
    styles.container,
    Platform.OS === 'android' && styles.androidShadow,
    Platform.OS === 'ios' && styles.iosShadow,
  ];

  return (
    <TouchableOpacity style={styles.touchable} onPress={handlePress}>
      <View style={containerStyle}>
        <MaterialIcons
          name="my-location"
          color="#3834ff"
          size={24}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    position: 'absolute',
    bottom: 42,
    left: 16,
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  androidShadow: {
    elevation: 4,
  },
  iosShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  icon: {
    alignSelf: 'center',
  },
});
