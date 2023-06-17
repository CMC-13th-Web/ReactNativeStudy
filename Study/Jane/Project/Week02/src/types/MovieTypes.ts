export interface MovieList {
  id: number;
  title: string;
  medium_cover_image: string;
  year: number;
}

export interface MovieDetail {
  id: number;
  title: string;
  background_image: string;
  large_cover_image: string;
  year: number;
  description_full: string;
  rating: number;
  runtime: number;
}
