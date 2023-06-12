import { Platform, StyleSheet } from "react-native";
import { styled } from "styled-components/native";

const ModalContainer = styled.Modal`
  margin: 0px;
  border-radius: 20px;
  padding: 35px;
  height: 800px;
  align-items: center;
  background-color: white;
  ${Platform.select({
    ios: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    android: {
      elevation: 10,
    },
    web: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
  })}
`;

const ModalView = styled.View`
  height: 800px;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 22px;
`;

const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 50px;
  border-radius: 20px;
  width: 70%;
  ${Platform.select({
    ios: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    android: {
      elevation: 10,
    },
    web: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
  })}
`;

export { ModalContainer, ModalView, ButtonContainer }