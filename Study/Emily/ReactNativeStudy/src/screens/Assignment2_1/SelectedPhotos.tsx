import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { images } from '../../recoil/atoms/images'
import { styles } from './SelectedPhotos.style';

export default function SelectedPhotos() {
  const imageUris = useRecoilValue(images);

  return (
    <ScrollView>
      {imageUris.map(uri => <Image source={{ uri }} style={styles.image} />)}
    </ScrollView>
  )
}