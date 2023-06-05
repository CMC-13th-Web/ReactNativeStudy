import {
  fireEvent,
  render,
  renderHook,
  waitFor
} from "@testing-library/react-native";
import { useCountStore } from "store/count";
import CounterCard from "./CounterCard";

// const initRender = () => {
//   const { count } = useCountStore();
//   return count;
// };

describe("컴포넌트/원자/카드/카운터카드", () => {
  test("+ 버튼을 누를 경우, 카운트값이 1인지 테스트", async () => {
    const current = renderHook(() => useCountStore());
    const screen = render(<CounterCard />);
    const increaseButton = screen.getByTestId("colorButton-증가");
    fireEvent.press(increaseButton);
    await waitFor(() => expect(current.result.current.count).toBe(1));
  });
  test("+ + + - 버튼을 누를 경우, 카운트값이 2인지 테스트", async () => {
    const current = renderHook(() => useCountStore());
    const screen = render(<CounterCard />);
    const increaseButton = screen.getByTestId("colorButton-증가");
    const decreaseButton = screen.getByTestId("colorButton-감소");
    fireEvent.press(increaseButton);
    fireEvent.press(increaseButton);
    fireEvent.press(increaseButton);
    fireEvent.press(decreaseButton);
    await waitFor(() => expect(current.result.current.count).toBe(2));
  });
});
