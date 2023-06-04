import { render, fireEvent, waitFor } from "@testing-library/react-native";
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
  test("토글을 세번 눌렀음에도 정상적으로 박스가 화면상에 반영되는지 테스트.", async () => {
    const screen = initRender();
    const commonSwitch = screen.getByTestId("commonSwitch");
    //토글 온.
    fireEvent(commonSwitch, 'valueChange', true);
    fireEvent(commonSwitch, 'valueChange', true);
    fireEvent(commonSwitch, 'valueChange', true);
    await waitFor(() => expect(screen.getByTestId("commonBox")).toBeDefined());
  });
});