const BASE_URL = "/api/v2";

/**
 * 
 * @param page 영화 페이지 수
 * @returns 영화 페이지별 정보 url
 */
export const GET_MOVIE_BY_PAGE_NUMBER = (page: number) =>
  `${BASE_URL}/list_movies.json?page=${page}`;


/**
 * 
 * @param id 영화 아이디
 * @returns 영화 상세정보 url
 */
export const GET_MOVIE_DETAIL_INFO = (id: number) =>
  `/movie_details.json?movie_id=${id}`;
