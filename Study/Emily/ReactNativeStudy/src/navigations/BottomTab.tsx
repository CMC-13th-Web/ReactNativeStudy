import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from '../screens/Notification';
import Search from '../screens/Search';
import Message from '../screens/Message';
import Home from '../screens/Home';

type BottomTabParamList = {
  Home: undefined,
  Notification: undefined,
  Search: undefined,
  Message: undefined
}

export type BottomTabNavigationProps = BottomTabNavigationProp<BottomTabParamList>;

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        title: '홈',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Notification" component={Notification} options={{
        title: '알림',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Search" component={Search} options={{
        title: '검색',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Message" component={Message} options={{
        title: '메세지',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="message-text" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  );
}