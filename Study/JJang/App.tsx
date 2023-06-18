import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RecoilRoot} from 'recoil';
import {TabNavigation} from './src/components/common/TabNavigation';
import usePermissions from './src/hooks/usePermissions';

function App(): JSX.Element {
  usePermissions();
  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
