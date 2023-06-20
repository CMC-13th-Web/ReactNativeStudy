import CommonMap from "components/organizations/maps/CommonMap/CommonMap";
import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import { mapScreenStyles } from "./MapScreen.style";
import { Position } from "types/apps/map";
import { markerArr } from "data/maps";
import { Context } from "utils/Context";

const MapScreen = () => {
  const { setDialog } = useContext(Context);
  const [currentPosition, setCurrentPosition] = useState<Position>({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setDialog(error.message, true);
      }
    );
  }, []);
  return (
    <View style={mapScreenStyles.container}>
      <CommonMap
        mapWidth={90}
        mapHeight={80}
        markers={markerArr}
        initialPosition={currentPosition}
      />
    </View>
  );
};

export default MapScreen;
