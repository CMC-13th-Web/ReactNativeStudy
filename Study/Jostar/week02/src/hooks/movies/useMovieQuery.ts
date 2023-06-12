import { getMoviesByPage } from "apis/movies/movies";
import { useInfiniteQuery } from "react-query";

export const useMovieQuery = () => {
  return useInfiniteQuery(
    ["movie"],
    ({ pageParam = 1 }) => getMoviesByPage(pageParam),
    {
      onSuccess(data) {
        console.log(data);
      },
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.page_number + 1;
      },
    }
  );
};
