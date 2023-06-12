import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  fireEvent,
  render,
  renderHook,
  waitFor,
} from "@testing-library/react-native";
import { useMovieQuery } from "./useMovieQuery";
import { server } from "../../mocks/server";
import { GET_MOVIE_BY_PAGE_NUMBER } from "constants/apiUrls";

const queryClient = new QueryClient();

const Wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
describe("useMovieQuery 테스트", () => {
  test("useMovieQuery 정상동작 확인 테스트", async () => {
    const { result } = renderHook(
      () => useMovieQuery(),
      {
        wrapper: Wrapper,
      }
    );
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toBeDefined();
  });
  
  
  test("useMovieQuery API 통신 실패 테스트", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_API_URL}${GET_MOVIE_BY_PAGE_NUMBER(1)}`,
        (req, res, ctx) => {
          return res(
            ctx.status(500)
          );
        }
      )
    );
    const { result } = renderHook(
      () => useMovieQuery(),
      {
        wrapper: Wrapper,
      }
    );
    await waitFor(() => result.current.isError);
    expect(result.current.isError).toBeFalsy();
  });
})