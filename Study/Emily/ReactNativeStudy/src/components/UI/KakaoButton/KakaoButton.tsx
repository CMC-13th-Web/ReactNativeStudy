import { Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './KakaoButtonStyleSheet';

type Props = {
  text: string;
  onPress: Function;
}

export default function KakaoButton({ text, onPress }: Props) {
  return (
    <Pressable
      style={styles.button}
      onPress={() => onPress()}
    >
      <Text style={styles.text}>
        {text}
      </Text>
    </Pressable>
  )
}