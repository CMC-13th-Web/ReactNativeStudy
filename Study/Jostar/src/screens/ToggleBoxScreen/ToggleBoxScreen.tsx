import React, { useState } from 'react';
import { View } from 'react-native';
import { toggleBoxScreenStyles } from './ToggleBoxScreen.style';
import CommonSwitch from 'components/atoms/switchs/CommonSwitch/CommonSwitch';
import CommonBox from 'components/atoms/boxs/CommonBox/CommonBox';
import { Size } from 'constants/styles';

const ToggleBoxScreen = () => {
  const [showBox, setShowBox] = useState<boolean>(false);
  const handleToggleSwitch = () => {
    setShowBox(!showBox);
  }
  return (
    <View style={toggleBoxScreenStyles.container}>
      <CommonSwitch 
        isEnabled={showBox} 
        toggleSwitch={handleToggleSwitch}/>
      {
        showBox && <CommonBox rounded={true} size={Size.LARGE} color={'yellow'}/>
      }
    </View>
  );
};

export default ToggleBoxScreen;