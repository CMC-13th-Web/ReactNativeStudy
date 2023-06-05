import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RecoilRoot} from 'recoil';
import {TabNavigation} from './src/components/common/TabNavigation';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
