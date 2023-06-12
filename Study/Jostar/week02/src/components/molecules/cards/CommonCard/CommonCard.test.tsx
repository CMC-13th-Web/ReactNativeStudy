import {
  fireEvent,
  render,
  renderHook,
  waitFor
} from "@testing-library/react-native";
import CommonCard from "./CommonCard";
import { Card } from "types/apps/card";
import { Movie } from "types/movie";

// const initRender = () => {
//   const { count } = useCountStore();
//   return count;
// };

describe("컴포넌트/원자/카드/일반카드", () => {
  test("영화 데이터가 정상적으로 화면에 반영되는지 테스트.", async () => {
    const movie: Movie = {
      id: 22,
      url: "",
      imdb_code: "",
      title: "테스트 텍스트",
      title_english: "",
      title_long: "",
      slug: "",
      year: 1987,
      rating: 0,
      runtime: 0,
      genres: [],
      summary: "",
      description_full: "영화 설명입니다.",
      synopsis: "",
      yt_trailer_code: "",
      language: "",
      mpa_rating: "",
      background_image: "",
      background_image_original: "",
      small_cover_image: "",
      medium_cover_image: "https:\/\/yts.mx\/assets\/images\/movies\/soul_survivors_2001\/medium-cover.jpg",
      large_cover_image: "",
      state: "",
      torrents: [{}],
      date_uploaded: "",
      date_uploaded_unix: 0,
    }
    const screen = render(<CommonCard<Movie> item={movie} handleClick={() => {}} addonInfo={"reporter"} />);
    const movieCard = screen.getByText("테스트 텍스트");
    expect(movieCard).toBeDefined();
  });
  test("임의의 타입을 만들고 넣었을때 화면 반영이 되는지 테스트.", async () => {
    interface News extends Card {
      reporter: string;
    }
    const news: News = {
      id: 23,
      title: "제목입니다.",
      reporter: "죠스타"
    }
    const screen = render(<CommonCard<News> item={news} handleClick={() => {}} addonInfo={"reporter"} />);
    const newsCard = screen.getByText("죠스타");
    expect(newsCard).toBeDefined();
  });
});
