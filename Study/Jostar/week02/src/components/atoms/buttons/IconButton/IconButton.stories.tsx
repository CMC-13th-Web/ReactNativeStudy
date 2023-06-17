// stories/Button.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IconButton from "./IconButton";

export default {
  title: "컴포넌트/아톰/버튼/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const IconButtonTest: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

IconButtonTest.args = {
  icon: <FontAwesomeIcon name="rocket" size={30}/>,
  label: "테스트 버튼",
  handleClick: () => {},
};
