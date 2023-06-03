## 첫번째주 과제
### 🔨초기셋팅
- yarn 버전: 1.22.17
- npx react-native init MyApp --template react-native-template-storybook을 통해 스토리북 형태의 리액트 네이티브 환경을 구축합니다.
- 또한 절대경로 설정을 위해 babel-plugin-module-resolver를 설치했습니다. 최종적으로 babel.config.js파일에 module-resolver와 관련된 코드를 작성해줍니다.
```typescript
[
  'module-resolver',
  {
    root: ['./src'],
    extensions: [
      '.ios.ts',
      '.android.ts',
      '.style.ts',
      '.ts',
      '.ios.tsx',
      '.android.tsx',
      '.test.tsx',
      '.tsx',
      '.jsx',
      '.js',
      '.json',
    ],
  },
],
```

### 1. Stack navigation과 Tab navigation 함께 사용하기
- 두 네비게이션을 같이 사용하기위해 먼저 라이브러리를 다운받습니다.
  - Step1: 버그가 가장 많이 발생하는 react-native-reanimated를 먼저 설치합니다. 이는 반드시 2.15.0버전으로 설치합니다. 

    Q: 왜 굳이 2.15.0 버전인가요?

    A: 추후 드로우 네이게이션을 사용하게 된다면, 3버전 이상을 사용시 버그가 발생하므로 2버전중 가장 버전이 빠른 2.15.0을 설치합니다.
    - yarn add react-native-reanimated@2.15.0
  - Step2: 스택 네비게이션 관련 라이브러리를 설치합니다.
    - yarn add @react-navigation/stack react-native-gesture-handler
  - Step3: 최종적으로 탭 네비게이션을 설치합니다. 저는 이번 스터디에서 Bottom Tab Navigator를 사용하도록 하겠습니다.
    - yarn add @react-navigation/material-bottom-tabs react-native-paper react-native-pager-view react-native-tab-view @react-navigation/native
- Bottom Navigation 버튼에 사용될 아이콘 라이브러리를 다운받습니다. 아이콘 라이브러리는 아래와 같습니다.
  - yarn add react-native-vector-icons
  - yarn add @types/react-native-vector-icons --dev
- Stack Navigation에 Bottom Tab Navigation 넣기
  - 저는 BottomTabNavigator.tsx파일에서 하단 탭 메뉴에 관한 코드를 구성하였으며, 메뉴 정보들을 단순하게 태그로 집어넣는게 아닌, 객체배열의 형태로 관리하도록 만들었습니다. data/menus/bottomTabMenus파일에 하단 탭 메뉴정보로 활용될 값들을 담아 관리하도록 했습니다. 이때, 메뉴의 타입정보는 types/apps/menu.ts파일에 보관하였으며 메뉴의 정보를 스트링으로 저장했을때 직관성을 잃을수 있다고 판단하여 constants폴더에서 메뉴 스트링값을 관리하도록 했습니다. 그후 Navigator파일에서 BottomTabNavigator에 적용했던 방식처럼 메뉴를 데이터화하여 관리하도록 만들었고, BottomTabNavigator를 데이터화하여 스택 네비게이션에 BottomTabNavigator가 들어가도록 만들었습니다.
    ```typescript
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
    ```
  
- 홈 디테일 화면으로 넘어가기.
  - 홈 디테일 화면으로 넘어가는 기능을 구현하기위해 useNavigation훅을 가져옵니다. 그후 아래와 같이 스택 네비게이팅을 위해 navigation을 사용할 수 있습니다.
    ```typescript
    const navigation = useNavigation();
    navigation.navigate(StackMenus.HomeDetailScreen as never);
    ```
    그러나 이코드는 바람직하지 못합니다. 왜냐하면 타입단언으로 인해 제대로된 타입검출을 하지못할뿐더러, never를 사용하여 사실상 any로 코드를 선언한것과 다를게 없어졌기 때문입니다. 따라서 코드를 개선할 필요가 있는데, 먼저 useNavigation에 제네릭을 적용시켜줘야합니다. NavigationProp을 @react-navigation/native로 부터 불러오고 집어넣어줍니다. 그럼 코드는 다음과 같이 되는데 이때에도 오류가 발생하게 됩니다.
    ```typescript
    const navigation = useNavigation<NavigationProp>();
    navigation.navigate(StackMenus.HomeDetailScreen as never);
    ```
    바로 NavigationProp상에도 제네릭을 적용시켜줘야하기 때문인데요, 사실 NavigationProp는 스크린명으로 값을 전달시킬때 사용하는 타입(type)이기 때문이죠. 따라서 여기에도 제네릭을 적용시켜야합니다. 이때 저희는 따로 HomeDetailScreen에 값을 전달하지않기 때문에 undefined를 작성해주기만 하면 됩니다.
    ```typescript
    type RootParamList = {
      HomeDetailScreen: undefined;
    };
    const navigation = useNavigation<NavigationProp<RootParamList>>();
    navigation.navigate(StackMenus.HomeDetailScreen);
    ```
    자 그럼 진짜로 끝났습니다. 이제 편하게 라우팅이 가능해졌습니다. 어떠한 오류도 발생하지않고 타입 안정성을 챙긴(제가 생각하기에는 말이죠...?) 코드를 만들었습니다.