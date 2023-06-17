import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { server } from "../../mocks/server";
import {
  fireEvent,
  render,
  renderHook,
  waitFor,
} from "@testing-library/react-native";
import MovieScreen from "./MovieScreen";
import { NavigationContainer } from "@react-navigation/native";
import { GET_MOVIE_BY_PAGE_NUMBER } from "constants/apiUrls";
const queryClient = new QueryClient();

//해당 테스트 코드는 작성 실패한 테스트 코드입니다... jest가 node_module을 인식못하는 버그로 인해 스켈레톤 UI를 인식하지 못해 에러를 내는 이슈가 있었습니다.ㅠㅠ
//이번 이슈로인해 제스트를 리액트 네이티브로 녹여내기위해 따로 공부를 해야겠구나 하며 생각하게 되었네요.
describe("스크린/영화스크린", () => {
  test("서버로부터 데이터를 가져오는게 실패했을 경우.", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_API_URL}${GET_MOVIE_BY_PAGE_NUMBER(1)}`,
        (req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({ message: "영화 목록을 가져오는데 실패했습니다." })
          );
        }
      )
    );
    const screen = render(
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <MovieScreen />
        </NavigationContainer>
      </QueryClientProvider>
    );
    await waitFor(() => {
      const errorMessage = screen.getByText(/서버상의 오류로/);
      expect(errorMessage).toBeDefined();
    });
  });
});
