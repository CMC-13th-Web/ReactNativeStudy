/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from 'screens/Home';
import {styled} from 'styled-components/native';

function App(): JSX.Element {
  return (
    <StyledSafeAreaView>
      <Home />
    </StyledSafeAreaView>
  );
}

export default App;

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
