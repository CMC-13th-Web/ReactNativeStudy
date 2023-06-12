import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native';
import styled from 'styled-components/native';

interface CounterProps {
  count: number;
  handleMinusClick: () => void;
  handlePlusClick: () => void;
}

/**
 *
 * @param count 카운터의 초깃값 - number
 * @param handleMinusClick: () => void;
 * @param handlePlusClick: () => void;
 */
export const Counter = ({...props}: CounterProps) => {
  return (
    <Wrapper>
      <CountWrapper>
        <StyledCount count={props.count}>{props.count}</StyledCount>
      </CountWrapper>
      <View>
        <Button title="-" onPress={props.handleMinusClick} />
        <Button title="+" onPress={props.handlePlusClick} />
      </View>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 100%;

  align-items: center;
  justify-content: space-between;
`;

const StyledCount = styled.Text<{count: number}>`
  font-size: 100px;
`;

const CountWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
