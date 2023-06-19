import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default function MapScreen() {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  return (
    <View>
      <Text>Map</Text>
    </View>
  );
}
