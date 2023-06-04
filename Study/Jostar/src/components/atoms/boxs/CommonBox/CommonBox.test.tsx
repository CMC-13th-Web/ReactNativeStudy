import "react-native";
import React from "react";
import { commonBoxStyles, makeSizeNumber } from "./CommonBox.style";
import { Size } from "constants/styles";
// Note: test renderer must be required after react-native.
import { render, fireEvent } from "@testing-library/react-native";
import CommonBox from "./CommonBox";
import '@testing-library/jest-native'; 

const initRender = (
  rounded: boolean,
  size: Size.SMALL | Size.MEDIUM | Size.LARGE,
  color: string
) => {
  return render(<CommonBox rounded={rounded} size={size} color={color}/>);
};

describe("컴포넌트/분자/박스/일반박스", () => {
  test("크기 적용을 위한 makeSizeNumber함수가 제대로 동작하는지 테스트.", () => {
    expect(makeSizeNumber(Size.SMALL)).toBe(20);
    expect(makeSizeNumber(Size.MEDIUM)).toBe(40);
    expect(makeSizeNumber(Size.LARGE)).toBe(60);
  });
  test("CommonBox에서 사용되는 스타일시트 매개변수가 정상 반영되는지 테스트.", () => {
    const boxStyles = commonBoxStyles(false, Size.MEDIUM, "skyblue");
    expect(boxStyles.container.borderRadius).toBe(0);
    //값이 제대로 적용됐다면 가로와 세로의 크기는 동일해야함.
    expect(boxStyles.container.width === boxStyles.container.height).toBeTruthy;
    expect(boxStyles.container.backgroundColor).toBe("skyblue");
  });
  test("CommonBox의 스타일이 정상적으로 화면상에 반영되고 있는지 스냅샷 테스트.", () => {
    const screen = initRender(false, Size.MEDIUM, "yellow");
    expect(screen.getByTestId("commonBox")).toHaveStyle({
      backgroundColor: "yellow",
      width: 40,
      borderRadius: 0
    })
  })
});
