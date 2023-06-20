import CurrentPosition from 'components/CurrentPosition';
import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Alert,
  Linking,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import NaverMapView, {Coord, Marker} from 'react-native-nmap';
import {usePermissionStore} from 'stores/permissionStore';

export default function MapScreen() {
  const {hasLocationPermission} = usePermissionStore();
  const map = useRef<NaverMapView>(null);
  const [currentPosition, setCurrentPosition] = useState<Coord | null>(null);
  const defaultPosition: Coord = {
    latitude: 37.565383,
    longitude: 126.976292,
  };

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const fetchCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        setCurrentPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setIsLoading(false);
      },
      error => {
        setError(error.message);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 10,
      },
    );
  };

  const openSettings = () => {
    Linking.openSettings();
  };

  const handleCurrentPosition = () => {
    if (hasLocationPermission) {
      fetchCurrentPosition();
      if (!currentPosition) return;
      map.current?.animateToCoordinate(currentPosition);
    } else {
      Alert.alert('위치 권한을 허용해주세요.', '', [
        {text: '확인', onPress: openSettings},
      ]);
    }
  };

  useEffect(() => {
    if (hasLocationPermission) {
      fetchCurrentPosition();
    } else {
      setIsLoading(false);
    }
  }, [hasLocationPermission]);

  if (isLoading) {
    return (
      <View style={[styles.full, styles.loadingContainer]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.full, styles.errorContainer]}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.full}>
      <NaverMapView
        ref={map}
        style={{flex: 1}}
        center={{...(currentPosition ?? defaultPosition), zoom: 16}}>
        {currentPosition != null && (
          <Marker coordinate={currentPosition} pinColor="#3834ff" />
        )}
      </NaverMapView>
      <CurrentPosition handlePress={handleCurrentPosition} />
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    position: 'relative',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
  },
  errorText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
