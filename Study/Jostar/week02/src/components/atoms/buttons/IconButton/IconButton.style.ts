import { StyleSheet } from "react-native";
import { styled } from "styled-components/native";

const IconButtonContainer = styled.TouchableOpacity`
  max-width: 300px;
  min-width: 150px;
  height: 50px;
  padding: 10px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-width: 2px;
  border-color: black;
  background-color: white;
`;

const IconText = styled.Text`
  color: black;
`;

export { IconButtonContainer, IconText };