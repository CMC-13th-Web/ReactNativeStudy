import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  hasInput: boolean;
}

export default function Pin({hasInput}: Props) {
  return <View style={[styles.round, hasInput && styles.fill]} />;
}

const styles = StyleSheet.create({
  round: {
    borderRadius: 50,
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderColor: '#3834ff',
    borderWidth: 1,
  },
  fill: {
    backgroundColor: '#3834ff',
  },
});
