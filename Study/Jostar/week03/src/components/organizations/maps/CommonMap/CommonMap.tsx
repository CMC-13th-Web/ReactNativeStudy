import { View } from "react-native";
import MapView from "react-native-maps";
import { MarkerElement, Position } from "types/apps/map";
import CommonMarker from "components/atoms/maps/CommonMarker/CommonMarker";
import { mapStyle } from "styles/mixinStyle";
import { useEffect, useRef } from "react";

interface Props {
  markers: MarkerElement[];
  initialPosition: Position;
  mapWidth: number;
  mapHeight: number;
}

const CommonMap = ({
  mapWidth,
  mapHeight,
  markers,
  initialPosition,
}: Props) => {
  const mapRef = useRef<MapView>(null);
  useEffect(() => {
    mapRef.current?.animateToRegion({
      latitude: initialPosition.latitude,
      longitude: initialPosition.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  });
  return (
    <View style={mapStyle(mapWidth, mapHeight).container}>
      <MapView
        ref={mapRef}
        style={{ flex: 1, width: "100%" }}
        initialRegion={{
          ...initialPosition,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, _id) => (
          <CommonMarker
            key={_id}
            position={marker.position}
            title={marker.title}
          />
        ))}
      </MapView>
    </View>
  );
};

export default CommonMap;
