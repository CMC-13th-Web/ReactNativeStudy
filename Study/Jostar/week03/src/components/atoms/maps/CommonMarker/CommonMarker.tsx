import React from "react";
import { Marker } from "react-native-maps";
import { Position } from "types/apps/map";

interface Props {
  title: string;
  position: Position;
}

const CommonMarker = ({ title, position }: Props) => {
  return (
    <Marker
      title={title}
      coordinate={{
        latitude: position.latitude,
        longitude: position.longitude,
      }}
    />
  );
};

export default CommonMarker;
