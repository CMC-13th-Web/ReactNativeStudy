/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState} from 'react';
import NaverMapView, {Marker} from 'react-native-nmap';
import Geolocation from '@react-native-community/geolocation';

export const SearchScreen = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLogitude] = useState(0);

  const geoLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = Number(JSON.stringify(position.coords.latitude));
        const longitude = Number(JSON.stringify(position.coords.longitude));

        setLatitude(latitude);
        setLogitude(longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  geoLocation();

  return (
    <NaverMapView
      style={{width: '100%', height: '100%'}}
      showsMyLocationButton={true}
      center={{latitude: latitude, longitude: longitude, zoom: 16}}
      onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
      onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}>
      <Marker
        coordinate={{latitude: latitude, longitude: longitude}}
        pinColor="#9abff3"
      />
    </NaverMapView>
  );
};
