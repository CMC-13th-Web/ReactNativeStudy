import { NavigationContainer } from "@react-navigation/native";
import Navigator from "navigators/Navigator";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    </QueryClientProvider>
  )
}

export default App;