import { ComponentMeta, ComponentStory } from "@storybook/react";

import { useState } from "react";
import CommonSwitch from "./CommonSwitch";

export default {
  title: "컴포넌트/아톰/스위치/CommonSwitch",
  component: CommonSwitch,
} as ComponentMeta<typeof CommonSwitch>;

const CommonSwitchContainer = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return <CommonSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} />;
};

export const CommonSwitchTest: ComponentStory<typeof CommonSwitch> = () => (
  <CommonSwitchContainer />
);
