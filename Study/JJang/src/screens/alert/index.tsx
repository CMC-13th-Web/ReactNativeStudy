import React from 'react';
import {View} from 'react-native';
import {useRecoilState} from 'recoil';
import {Counter} from '../../components/alret/Counter';
import countState from '../../store/count';

export const AlertScreen = () => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <View>
      <Counter
        count={count}
        handleMinusClick={() => setCount(count - 1)}
        handlePlusClick={() => setCount(count + 1)}
      />
    </View>
  );
};
