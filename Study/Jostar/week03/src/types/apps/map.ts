interface Position {
  latitude: number;
  longitude: number;
}

interface MarkerElement {
  title: string;
  position: Position;
}

export type { MarkerElement, Position };