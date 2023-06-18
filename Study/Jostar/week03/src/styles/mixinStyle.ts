import { Platform, StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";

const mixinStyle = StyleSheet.create({
  dialog: {
    margin: 0,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height:2
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
          height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    })
  },
});

const mapStyle = (width?: number, height?: number) => StyleSheet.create({
  container: {
    width: vw(width ?? 100),
    height: vh(height ?? 100),
    flex: 1,
    borderRadius: 20,
  }
});

export { mixinStyle, mapStyle };