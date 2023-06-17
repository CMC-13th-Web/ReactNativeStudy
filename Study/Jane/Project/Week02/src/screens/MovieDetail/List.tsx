import React from 'react';
import {styled} from 'styled-components/native';

interface ListProps {
  title: string;
  content: string;
}

const Container = styled.View`
  flex-direction: row;
  gap: 22;

  padding-vertical: 8;
`;

const ListHeader = styled.Text`
  color: #3834ff;
  font-size: 16;
  font-weight: 500;
`;

const ListContent = styled.Text`
  font-size: 16;
  flex-shrink: 1;
`;

export default function List({title, content}: ListProps) {
  return (
    <Container>
      <ListHeader>{title}</ListHeader>
      <ListContent>{content}</ListContent>
    </Container>
  );
}
