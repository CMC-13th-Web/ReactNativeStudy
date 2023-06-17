import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const MovieMainContainer = styled.View`
  width: 100vw;
  height: 800px;
  flex-direction: column;
  align-items: center;
`;

const MovieImage = styled.Image`
  width: 300px;
  height: 500px;
`;

const MovieTitle = styled.Text`
  font-size: 23px;
  font-weight: 800;
  margin-top: 13px;
  color: black;
`;

const BackGroundCover = styled.ImageBackground`
  width: 100vw;
  object-fit: cover;
  height: 500px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextContainer = styled.View`
  flex-direction: row;
`;

const ContentText = styled.Text`
  color: black;
  font-weight: 800;
  font-size: 17px;
  width: 200px;
  margin-right: 20px;
`;

const Content = styled.Text`
  color: black;
`;

export { ContentText, MovieMainContainer, Content, TextContainer, Container, MovieImage, MovieTitle, BackGroundCover }