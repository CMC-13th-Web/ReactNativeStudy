import React from 'react';
import {styled} from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddButton from './AddButton';

const StyledView = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
  gap: 20;
`;

export default function AddScreen() {
  const onPress = () => {
    // TODO
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StyledView>
        <AddButton iconName="camera-alt" onPress={onPress} />
        <AddButton iconName="photo-library" onPress={onPress} />
      </StyledView>
    </SafeAreaView>
  );
}
