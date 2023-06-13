import {useQuery} from '@tanstack/react-query';
import {getMovieDetail} from 'api/movie.service';

export default function useMovieDetail(id: number) {
  const query = useQuery(['MOVIE', 'detail', id], () => getMovieDetail(id), {
    select: res => res.data.movie,
  });
  return query;
}
