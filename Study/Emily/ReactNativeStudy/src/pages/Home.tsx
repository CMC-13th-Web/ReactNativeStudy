import { View, Text, Button } from 'react-native'
import React from 'react'
import Props from '../models/Props'

export default function Home({ navigation }: Props) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="상세보기 (과제 1-1)"
        onPress={() => navigation.navigate('Detail', {id: 1})}
      />
      <Button
        title="과제 1-2"
        onPress={() => navigation.navigate('Assignment1_2')}
      />
      <Button
        title="과제 1-3"
        onPress={() => navigation.navigate('Assignment1_3')}
      />
      <Button
        title="과제 1-4"
        onPress={() => navigation.navigate('Assignment1_4')}
      />
    </View>
  )
}