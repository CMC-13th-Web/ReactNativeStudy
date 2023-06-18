import { View } from 'react-native';
import MapView from "react-native-maps";
import { MarkerElement, Position } from 'types/apps/map';
import CommonMarker from 'components/atoms/maps/CommonMarker/CommonMarker';
import { mapStyle } from 'styles/mixinStyle';

interface Props {
  markers: MarkerElement[];
  initialPosition: Position;
  mapWidth: number;
  mapHeight: number;
}

const CommonMap = ({mapWidth, mapHeight, markers, initialPosition}: Props) => {
  return (
    <View style={mapStyle(mapWidth, mapHeight).container}>
      <MapView
        style={{ flex: 1, width: "100%" }}
        initialRegion={{
          ...initialPosition,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          {
            markers.map(marker => <CommonMarker position={marker.position} title={marker.title}/>)
          }
      </MapView>
    </View>
  );
};

export default CommonMap;