import { StackMenus } from "constants/menus";
import BottomTabNavigator from "navigators/BottomTabNavigator";
import MovieDetailScreen from "screens/MovieDetailScreen/MovieDetailScreen";
import { StackMenu } from "types/apps/menu";

export const stackMenus: StackMenu[] = [
  {
    name: StackMenus.BottomTabNavigator,
    component: BottomTabNavigator,
  },
  {
    name: StackMenus.MovieDetailScreen,
    component: MovieDetailScreen,
  },
];