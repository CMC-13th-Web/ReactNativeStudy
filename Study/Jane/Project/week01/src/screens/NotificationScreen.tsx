import React, {useState} from 'react';
import {Button, View} from 'react-native';
import Box from 'components/Box';

function NotificationScreen() {
  const [visible, setVisible] = useState<boolean>(true);

  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button title="토글" onPress={onPress} />
      {visible && <Box rounded color="blue" size="large" />}
    </View>
  );
}

export default NotificationScreen;
