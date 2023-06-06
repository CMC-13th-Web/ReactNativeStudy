import { BottomMenus } from "constants/menus";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CountScreen from "screens/CountScreen/CountScreen";
import HomeScreen from "screens/HomeScreen/HomeScreen";
import ToggleBoxScreen from "screens/ToggleBoxScreen/ToggleBoxScreen";
import KakaoLoginScreen from "screens/KakaoLoginScreen/KakaoLoginScreen";
import { BottomTabMenu } from "types/apps/menu";

export const bottomTabMenu: BottomTabMenu[] = [
  {
    name: BottomMenus.Home,
    component: HomeScreen,
    tabBarLabel: "메인",
    tabBarIcon: <EntypoIcon size={20} name="home" />,
  },
  {
    name: BottomMenus.Count,
    component: CountScreen,
    tabBarLabel: "카운터",
    tabBarIcon: <MaterialCommunityIcons size={20} name="axis-x-rotate-counterclockwise" />,
  },
  {
    name: BottomMenus.KakaoLogin,
    component: KakaoLoginScreen,
    tabBarLabel: "카카오 로그인",
    tabBarIcon: <MaterialCommunityIcons size={20} name="phone-in-talk" />,
  },
  {
    name: BottomMenus.ToggleBox,
    component: ToggleBoxScreen,
    tabBarLabel: "토글박스",
    tabBarIcon: <FeatherIcon size={20} name="toggle-left" />,
  },
];