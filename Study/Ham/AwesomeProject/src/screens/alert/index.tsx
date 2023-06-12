import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';
import Box from '../../components/box/Box';

const Alert = () => {
  const [show, SetShow] = useState<boolean>(false);

  return (
    <View>
      <Text>AlertScreen</Text>
      <Button title="토글" onPress={() => SetShow(!show)} />
      {show && <Box rounded={true} size="medium" color="blue" />}
    </View>
  );
};

export default Alert;
