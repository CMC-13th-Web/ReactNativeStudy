import { Text } from "react-native";
import { IconButtonContainer, IconText } from "./IconButton.style";

interface IconButtonProps {
  icon: React.ReactElement;
  label: string;
  handleClick: () => void;
}

const IconButton = ({ label, icon, handleClick }: IconButtonProps) => {
  return (
    <IconButtonContainer onPress={handleClick}>
      {
        icon
      }
      <IconText>{label}</IconText>
    </IconButtonContainer>
  );
};

export default IconButton;
