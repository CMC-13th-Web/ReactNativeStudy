interface BottomTabMenu {
  name: string;
  component: () => JSX.Element;
  tabBarLabel: string;
  tabBarIcon: JSX.Element;
};

interface StackMenu {
  name: string;
  component: () => JSX.Element;
};

export type { BottomTabMenu, StackMenu };