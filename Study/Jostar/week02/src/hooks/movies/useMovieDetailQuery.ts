import { getMoviesDetailInfo } from "apis/movies/movies";
import { useQuery } from "react-query";

export const useMovieDetailQuery = (id: number) => {
  return useQuery(["bori-gallery"], () => getMoviesDetailInfo(id));
}