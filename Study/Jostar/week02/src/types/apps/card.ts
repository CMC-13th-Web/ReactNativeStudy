interface Card {
  id: number;
  title: string;
  [cardKry: string]: string | number | string[] | object[];
}

export type { Card };