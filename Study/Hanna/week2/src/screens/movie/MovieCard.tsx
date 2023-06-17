import React from 'react';
import {Movie} from '../../types/Movies';
import {styled} from 'styled-components/native';

const Container = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 16px;
`;

const MovieImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const Text = styled.Text`
  font-size: 16px;
`;

const MovieCard = ({id, title, medium_cover_image, year}: Movie) => {
  return (
    <Container>
      <MovieImage source={{uri: medium_cover_image}} />
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{year}</Text>
    </Container>
  );
};

export default MovieCard;
