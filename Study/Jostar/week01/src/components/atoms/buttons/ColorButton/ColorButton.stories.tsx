// stories/Button.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ColorButton from "./ColorButton";

export default {
  title: "컴포넌트/아톰/버튼/ColorButton",
  component: ColorButton,
} as ComponentMeta<typeof ColorButton>;

export const ColorButtonTest: ComponentStory<typeof ColorButton> = (args) => (
  <ColorButton {...args} />
);

ColorButtonTest.args = {
  color: "skyblue",
  label: "테스트 버튼",
  handleClick: () => {},
};
