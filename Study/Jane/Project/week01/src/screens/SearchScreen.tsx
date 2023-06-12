import React from 'react';
import {styled} from 'styled-components/native';
import {useCounterStore} from 'stores/CounterStore';
import Counter from 'components/Counter';

function SearchScreen() {
  const {count, increase, decrease} = useCounterStore();

  return (
    <StyledView>
      <Counter count={count} onIncrease={increase} onDecrease={decrease} />
    </StyledView>
  );
}

export default SearchScreen;

const StyledView = styled.View`
  flex: 1;
`;
