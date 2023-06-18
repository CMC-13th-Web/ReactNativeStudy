import {
  renderHook,
  waitFor
} from "@testing-library/react-native";
import { GET_MOVIE_BY_PAGE_NUMBER } from "constants/apiUrls";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { server } from "../../mocks/server";
import { useMovieQuery } from "./useMovieQuery";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

interface ChildrenElement {
  children: JSX.Element;
}

const Wrapper = ({ children }: ChildrenElement) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useMovieQuery 테스트", () => {
  test("useMovieQuery 정상동작 확인 테스트", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_API_URL}${GET_MOVIE_BY_PAGE_NUMBER(1)}`,
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({ data: [] })
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
    await waitFor(() => result.current.isSuccess)
    console.log(result.current.data)
    expect(result.current.isSuccess).toBeTruthy()
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
    expect(result.current.data).not.toBeDefined()
  });
})