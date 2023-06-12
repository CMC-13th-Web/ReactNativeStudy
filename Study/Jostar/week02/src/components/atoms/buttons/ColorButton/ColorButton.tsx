import { Text, TouchableOpacity } from "react-native";
import { ButtonContainer, ButtonText } from "./ColorButton.style";

interface ColorButtonProps {
  label: string;
  color: string;
  handleClick: () => void;
}

const ColorButton = ({ label, color, handleClick }: ColorButtonProps) => {
  return (
    <ButtonContainer
      style={{
        backgroundColor: color,
      }}
      onPress={handleClick}
    >
      <ButtonText>{label}</ButtonText>
    </ButtonContainer>
  );
};

export default ColorButton;
