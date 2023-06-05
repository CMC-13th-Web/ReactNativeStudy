import * as React from 'react';
import styled from 'styled-components/native';
import {Button, Text} from 'react-native';
import {useRecoilState} from 'recoil';

import {counter} from '../../states/counter';

const Search = () => {
  const [count, setCount] = useRecoilState(counter);

  return (
    <Container>
      <Text>SearchScreen</Text>
      <Counter>
        <TitleContainer>
          <Title>{count}</Title>
        </TitleContainer>
        <ButtonContainer>
          <Button title="+1" onPress={() => setCount(count + 1)} />
          <Button title="-1" onPress={() => setCount(count - 1)} />
        </ButtonContainer>
      </Counter>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;
const Counter = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 100px;
`;
const ButtonContainer = styled.View``;

export default Search;
