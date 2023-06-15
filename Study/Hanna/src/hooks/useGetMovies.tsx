import getMovies from '../api/getMovies';
import {useInfiniteQuery} from '@tanstack/react-query';

export const useGetMovies = () => {
  const data = useInfiniteQuery(
    ['movies'],
    ({pageParam = 0}) => getMovies(pageParam),
    {
      getNextPageParam: (_, allPages) => {
        return allPages.length * 8;
        // const nextPage = lastPage.data.page_number + 1;
        // // return nextPage > lastPage.data.page_number ? undefined : nextPage;
        // return nextPage;s
      },
    },
  );

  console.log(data, 'data');
  return data;
};
