import { Platform, StyleSheet } from "react-native";

export const commonCardSkeletonStyles = StyleSheet.create({
  container: {
    padding: "3%",
    flex: 1,
    margin: "4%",
    //최소길이를 정해줘서 정렬이 안되는 이슈 해결함.
    minWidth: "40%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
    ...Platform.select({
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
    }),
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 2,
  },
  title: {
    width: 120,
    height: 20,
    marginBottom: 2,
  },
  description: {
    width: 120,
    height: 30,
  },
});
