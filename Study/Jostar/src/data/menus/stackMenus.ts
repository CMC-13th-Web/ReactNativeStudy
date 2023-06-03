import { StackMenus } from "constants/menus";
import BottomTabNavigator from "navigators/BottomTabNavigator";
import HomeDetailScreen from "screens/HomeDetailScreen/HomeDetailScreen";
import { StackMenu } from "types/apps/menu";

export const stackMenus: StackMenu[] = [
  {
    name: StackMenus.BottomTabNavigator,
    component: BottomTabNavigator,
  },
  {
    name: StackMenus.HomeDetailScreen,
    component: HomeDetailScreen,
  },
];