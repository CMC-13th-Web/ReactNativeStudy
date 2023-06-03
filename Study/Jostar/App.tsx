import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigators/Navigator";

const App = () => {
  return(
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
};

export default App;