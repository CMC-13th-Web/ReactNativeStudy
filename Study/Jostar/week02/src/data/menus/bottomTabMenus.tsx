import { BottomMenus } from "constants/menus";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CameraScreen from "screens/CameraScreen/CameraScreen";
import MovieScreen from "screens/MovieScreen/MovieScreen";
import { BottomTabMenu } from "types/apps/menu";

export const bottomTabMenu: BottomTabMenu[] = [
  {
    name: BottomMenus.Camera,
    component: CameraScreen,
    tabBarLabel: "카메라",
    tabBarIcon: <EntypoIcon size={20} name="camera" />,
  },
  {
    name: BottomMenus.Movie,
    component: MovieScreen,
    tabBarLabel: "영화",
    tabBarIcon: <MaterialCommunityIcons size={20} name="movie" />,
  }
];