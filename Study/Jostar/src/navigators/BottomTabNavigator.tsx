import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { BottomMenus } from "constants/menus";
import { bottomTabMenu } from "data/menus/bottomTabMenus";
//const Tab = createMaterialTopTabNavigator();
// screenOptions={{
//   tabBarActiveTintColor: "#e91e63",
//   tabBarLabelStyle: { fontSize: 12 },
//   tabBarStyle: { backgroundColor: "powderblue" },
// }}
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={BottomMenus.Home}
      activeColor="skyblue"
      barStyle={{ backgroundColor: "white" }}
    >
      {bottomTabMenu.map((menu, _id) => (
        <Tab.Screen
          key={_id}
          name={menu.name}
          component={menu.component}
          options={{
            tabBarLabel: menu.tabBarLabel,
            tabBarIcon: () => menu.tabBarIcon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
