import { fireEvent, render, waitFor } from "@testing-library/react-native";
import ToggleBoxScreen from "./ToggleBoxScreen";

const initRender = () => {
  return render(<ToggleBoxScreen/>);
};

describe("스크린/메시지스크린", () => {
  test("토글을 눌렀을 경우 정상적으로 박스가 화면상에 반영되는지 테스트.", async () => {
    const screen = initRender();
    const commonSwitch = screen.getByTestId("commonSwitch");
    //토글 온.
    fireEvent(commonSwitch, 'valueChange', true);
    await waitFor(() => expect(screen.getByTestId("commonBox")).toBeDefined());
  });
  test("토글을 두번 누르면 박스가 보이지않는지 테스트.", async () => {
    const screen = initRender();
    const commonSwitch = screen.getByTestId("commonSwitch");
    fireEvent(commonSwitch, 'valueChange', true);
    fireEvent(commonSwitch, 'valueChange', true);
    //fireEvent(commonSwitch, 'valueChange', false);
    await waitFor(() => expect(screen.getByText(/어떠한 박스도 없습니다!/g)).toBeDefined());
  });
  test("토글을 세번 눌렀을 경우 정상적으로 박스가 화면상에 반영되는지 테스트.", async () => {
    const screen = initRender();
    const commonSwitch = screen.getByTestId("commonSwitch");
    fireEvent(commonSwitch, 'valueChange', true);
    fireEvent(commonSwitch, 'valueChange', true);
    fireEvent(commonSwitch, 'valueChange', true);
    await waitFor(() => expect(screen.getByText(/어떠한 박스도 없습니다!/g)).toBeDefined());
  });
});