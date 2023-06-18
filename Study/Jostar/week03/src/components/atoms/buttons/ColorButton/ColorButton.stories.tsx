// stories/Button.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import PhoneCover from "components/storybook/PhoneCover/PhoneCover";
import ColorButton from "./ColorButton";

export default {
  title: "컴포넌트/원자/버튼/ColorButton",
  component: ColorButton,
} as ComponentMeta<typeof ColorButton>;

export const ColorButtonTest: ComponentStory<typeof ColorButton> = (args) => (
  <PhoneCover children={<ColorButton {...args} />}/>
);

ColorButtonTest.args = {
  color: "skyblue",
  label: "테스트 버튼",
  handleClick: () => {},
};
