import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  type: number | '취소' | 'back' | 'bio';
  handlePress: () => void;
}

export default function Digit({type, handlePress}: Props) {
  const t = typeof type;

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.round, typeof type === 'number' && styles.number]}>
        {type === 'bio' ? (
          <MaterialIcons name="face" color="blue" size={24} />
        ) : (
          <Text style={[styles.text, t === 'number' && styles.numberText]}>
            {type === 'back' ? '<-' : type}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  round: {
    borderRadius: 50,
    width: 60,
    height: 60,

    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    backgroundColor: 'white',
    borderColor: '#3834ff',
    borderWidth: 1,
  },
  text: {
    color: '#3834ff',
    fontSize: 20,
  },
  numberText: {
    fontSize: 24,
  },
  fill: {
    backgroundColor: '#3834ff',
  },
});
