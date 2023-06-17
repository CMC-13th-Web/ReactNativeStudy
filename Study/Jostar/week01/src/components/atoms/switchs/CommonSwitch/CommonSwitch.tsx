import { Switch } from "react-native";

interface Props {
  isEnabled: boolean;
  toggleSwitch: () => void;
}

const CommonSwitch = ({ isEnabled, toggleSwitch }: Props) => {
  return (
    <Switch
      testID="commonSwitch"
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CommonSwitch;
