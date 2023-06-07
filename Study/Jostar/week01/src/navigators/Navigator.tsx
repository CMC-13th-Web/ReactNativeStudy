import { createStackNavigator } from "@react-navigation/stack";
import { stackMenus } from "data/menus/stackMenus";
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {stackMenus.map((menu, _id) => (
        <Stack.Screen key={_id} name={menu.name} component={menu.component} />
      ))}
    </Stack.Navigator>
  );
};

export default Navigator;