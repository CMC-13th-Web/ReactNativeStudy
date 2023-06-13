import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {RootStackParamList} from 'screens/types';
import {styled} from 'styled-components/native';
import List from './List';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

type MovieDetail = {
  id: string;
  title: string;
  background_image: string;
  large_cover_image: string;
  year: string;
  description_full: string;
  rating: string;
  runtime: string;
};

const Container = styled.View`
  flex: 1;
`;

const CoverImg = styled.ImageBackground`
  flex: 1;
  background-color: yellow;
`;

const BrigthView = styled.View`
  justify-content: center;
  align-items: center;
  gap: 8;
`;

const Poster = styled.Image`
  width: 30%;
  height: 60%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24;
  font-weight: 500;
`;

const Main = styled.ScrollView`
  flex: 2;

  padding-vertical: 16;
  padding-horizontal: 26;
`;

export default function MovieDetailScreen() {
  const {params} = useRoute<DetailScreenRouteProp>();

  const movie: MovieDetail = {
    id: params.id,
    title: 'Paris',
    background_image:
      'https://plus.unsplash.com/premium_photo-1676638972162-99c667d08938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    large_cover_image:
      'https://plus.unsplash.com/premium_photo-1676638972162-99c667d08938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    description_full:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    rating: '3.9점',
    year: '1988',
    runtime: '83분',
  };

  return (
    <Container>
      <CoverImg
        source={{uri: movie.background_image}}
        resizeMode="cover"
        blurRadius={20}>
        <BrigthView
          style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
          <Poster source={{uri: movie.background_image}} />
          <Title>{movie.title}</Title>
        </BrigthView>
      </CoverImg>

      <Main>
        <List title="설명" content={movie.description_full} />
        <List title="연도" content={movie.year} />
        <List title="평점" content={movie.rating} />
        <List title="시간" content={movie.runtime} />
      </Main>
    </Container>
  );
}
