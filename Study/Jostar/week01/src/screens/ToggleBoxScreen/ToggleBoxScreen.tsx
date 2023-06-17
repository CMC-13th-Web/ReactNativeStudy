import CommonBox from 'components/atoms/boxs/CommonBox/CommonBox';
import CommonSwitch from 'components/atoms/switchs/CommonSwitch/CommonSwitch';
import { Size } from 'constants/styles';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { toggleBoxScreenStyles } from './ToggleBoxScreen.style';

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
        showBox ? <CommonBox rounded={true} size={Size.LARGE} color={'yellow'}/>
        : <Text>어떠한 박스도 없습니다!</Text>
      }
    </View>
  );
};

export default ToggleBoxScreen;