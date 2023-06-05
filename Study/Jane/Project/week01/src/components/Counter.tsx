import React from 'react';
import styled from 'styled-components/native';

interface Props {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function Counter({count, onIncrease, onDecrease}: Props) {
  return (
    <Wrapper>
      <NumberArea>
        <Number>{count}</Number>
      </NumberArea>
      <StyledButton title="+1" onPress={onIncrease} />
      <StyledButton title="-1" onPress={onDecrease} />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
`;

const NumberArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Number = styled.Text`
  font-size: 72px;
  font-weight: bold;
`;

const StyledButton = styled.Button``;
