import Geolocation from '@react-native-community/geolocation';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export const Home = ({}) => {
  const [latitude, setLatitude] = useState(37);
  const [longitude, setLongitude] = useState(37);

  useEffect(() => {
    geoLocation();
  }, [latitude, longitude]);

  const geoLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLat = JSON.stringify(position.coords.latitude);
        const currentLon = JSON.stringify(position.coords.longitude);
        setLatitude(Number(currentLat));
        setLongitude(Number(currentLon));
      },
      error => console.log(error.code, error.message),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <>
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        />
      </View>
    </>
  );
};
