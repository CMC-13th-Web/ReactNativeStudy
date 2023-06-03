import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colorButtonStyles } from "./ColorButton.style";

interface Props {
  label: string;
  color: string;
  handleClick: () => void;
}

const ColorButton = ({ label, color, handleClick }: Props) => {
  return (
    <TouchableOpacity
      style={{
        ...colorButtonStyles.container,
        backgroundColor: color,
      }}
      onPress={handleClick}
    >
      <Text style={colorButtonStyles.labelText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ColorButton;
