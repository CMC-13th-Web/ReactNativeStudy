import client from './client';

const getMovies = async (pageNumber: number) => {
  const response = await client.get(
    `/list_movies.json?page=${pageNumber}&limit=8`,
  );
  return response.data;
};

export default getMovies;
