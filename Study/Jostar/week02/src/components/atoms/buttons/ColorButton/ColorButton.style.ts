import { StyleSheet } from "react-native";
import { styled } from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
  max-width: 300px;
  min-width: 150px;
  height: 50px;
  padding: 10px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;


const ButtonText = styled.Text`
  font-weight: 800;
  font-size: 20px;
`; 

export { ButtonContainer, ButtonText };