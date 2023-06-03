import { BottomMenus } from "constants/menus";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NotificationScreen from "screens/NotificationScreen/NotificationScreen";
import HomeScreen from "screens/HomeScreen/HomeScreen";
import MessageScreen from "screens/MessageScreen/MessageScreen";
import SearchScreen from "screens/SearchScreen/SearchScreen";
import { BottomTabMenu } from "types/apps/menu";

export const bottomTabMenu: BottomTabMenu[] = [
  {
    name: BottomMenus.Home,
    component: HomeScreen,
    tabBarLabel: "메인",
    tabBarIcon: <EntypoIcon size={20} name="home" />,
  },
  {
    name: BottomMenus.Notification,
    component: NotificationScreen,
    tabBarLabel: "알림",
    tabBarIcon: <Ionicons size={20} name="notifications" />,
  },
  {
    name: BottomMenus.Search,
    component: SearchScreen,
    tabBarLabel: "검색",
    tabBarIcon: <AntDesignIcon size={20} name="search1" />,
  },
  {
    name: BottomMenus.Message,
    component: MessageScreen,
    tabBarLabel: "메시지",
    tabBarIcon: <MaterialCommunityIcons size={20} name="message-text-outline" />,
  },
];