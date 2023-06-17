import {useInfiniteQuery} from '@tanstack/react-query';
import {getMovieList} from 'api/movie.service';

export default function useMovieList() {
  const query = useInfiniteQuery(
    ['MOVIE', 'list'],
    ({pageParam = 0}) => getMovieList(pageParam),
    {
      getNextPageParam: (_, allPages) => {
        return allPages.length * 8;
      },
    },
  );
  return query;
}
