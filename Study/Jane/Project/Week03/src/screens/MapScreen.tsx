import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import NaverMapView, {Coord, Marker} from 'react-native-nmap';

export default function MapScreen() {
  const [currentPosition, setCurrentPosition] = useState<Coord>({
    latitude: 37.565383,
    longitude: 126.976292,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setCurrentPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 10,
      },
    );
  }, []);

  return (
    <View style={styles.full}>
      <NaverMapView
        style={{width: '100%', height: '100%'}}
        center={{...currentPosition, zoom: 16}}>
        <Marker coordinate={currentPosition} pinColor="blue" />
      </NaverMapView>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});
