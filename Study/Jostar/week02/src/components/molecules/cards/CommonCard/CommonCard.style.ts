import { Platform, StyleSheet } from "react-native";
import { styled } from "styled-components/native";

const Container = styled.TouchableOpacity`
  padding: 3%;
  flex: 1;
  margin: 4%;
  width: 40%;
  height: 300px;
  background-color: white;
  border-radius: 8px;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  ${Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
    android: {
      elevation: 20,
    },
    web: {
      shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
  })};
`;

const Image = styled.Image`
  width: 120px;
  height: 120px;
`;

const Title = styled.Text`
  font-weight: 800;
  font-size: 20px;
  color: black;
  height: 40px;
`;

const Description = styled.Text`
  height: 40px;
  color: black;
`;

export { Container, Image, Title, Description };
