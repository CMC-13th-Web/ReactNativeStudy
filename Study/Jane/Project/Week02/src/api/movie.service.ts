import {MovieDetail, MovieList} from 'types/MovieTypes';
import client from './client';
import {AxiosResponse} from 'axios';

interface MovieListReqDto {
  page: number;
  limit: number;
}

interface MovieListResDto {
  movie_count: number;
  limit: number;
  page_number: 1;
  movies: MovieList[];
}

export async function getMovieList(page: number) {
  const params: MovieListReqDto = {page, limit: 8};
  const response = await client.get<AxiosResponse<MovieListResDto>>(
    `/list_movies.json`,
    {
      params,
    },
  );
  return response.data;
}

interface MovieDetailReqDto {
  movie_id: number;
}

interface MovieDetailResDto {
  movie: MovieDetail;
}

export async function getMovieDetail(movie_id: number) {
  const params: MovieDetailReqDto = {movie_id};
  const response = await client.get<AxiosResponse<MovieDetailResDto>>(
    `/movie_details.json`,
    {
      params,
    },
  );
  return response.data;
}
