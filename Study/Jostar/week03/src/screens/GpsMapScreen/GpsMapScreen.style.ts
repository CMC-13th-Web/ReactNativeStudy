import { StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";

export const gpsMapScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100),
    height: vh(100),
    justifyContent: "center",
    alignItems: "center"
  }
});