/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from 'navigation/RootStack';
import {styled} from 'styled-components/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StyledSafeAreaView>
        <RootStack />
      </StyledSafeAreaView>
    </NavigationContainer>
  );
}

export default App;

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
