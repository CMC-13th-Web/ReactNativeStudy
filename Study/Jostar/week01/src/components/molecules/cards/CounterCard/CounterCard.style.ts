import { StyleSheet } from "react-native";
import { mixinStyles } from "styles/mixinStyle";

export const counterCardStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  countInfo: {
    fontSize: 20,
    margin: 20
  }
});