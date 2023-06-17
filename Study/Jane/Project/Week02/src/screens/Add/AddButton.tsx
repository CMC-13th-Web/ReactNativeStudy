import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {styled} from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface AddButtonProps {
  iconName: string;
  onPress: () => void;
}

const StyledView = styled.View`
  background-color: white;
  width: 80;
  height: 80;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
`;

export default function AddButton({iconName, onPress}: AddButtonProps) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <StyledView style={{borderRadius: 20}}>
        <MaterialIcons name={iconName} color="#3834FF" size={30} />
      </StyledView>
    </TouchableNativeFeedback>
  );
}
