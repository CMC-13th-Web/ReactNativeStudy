import React from "react";
import { Text, TouchableOpacity } from "react-native";
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
      testID={`colorButton-${label}`}
      onPress={handleClick}
    >
      <Text style={colorButtonStyles.labelText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ColorButton;
