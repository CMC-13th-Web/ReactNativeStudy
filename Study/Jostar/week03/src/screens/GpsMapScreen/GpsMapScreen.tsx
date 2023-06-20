import Geolocation from "@react-native-community/geolocation";
import CommonMap from "components/organizations/maps/CommonMap/CommonMap";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Position } from "types/apps/map";
import { Context } from "utils/Context";
import { gpsMapScreenStyles } from "./GpsMapScreen.style";

const GpsMapScreen = () => {
  const { setDialog } = useContext(Context);
  const [currentPosition, setCurrentPosition] = useState<Position>({
    latitude: 37.6499635,
    longitude: 126.945553
  });
  useEffect(() => {
    const gps = Geolocation.watchPosition(
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
    return Geolocation.clearWatch(gps);
  }, []);
  return (
    <View style={gpsMapScreenStyles.container}>
      <CommonMap
        mapWidth={90}
        mapHeight={80}
        markers={[{
          title: "현재 위치",
          position: currentPosition
        }]}
        initialPosition={currentPosition}
      />
    </View>
  );
};

export default GpsMapScreen;
