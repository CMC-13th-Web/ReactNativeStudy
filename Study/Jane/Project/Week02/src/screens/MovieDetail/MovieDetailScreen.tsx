import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import {styled} from 'styled-components/native';
import {RootStackParamList} from 'screens/types';
import List from './List';
import useMovieDetail from 'hooks/useMovieDetail';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

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

  padding-horizontal: 26;
`;

const Spacing = styled.View`
  height: 16;
`;

export default function MovieDetailScreen() {
  const {params} = useRoute<DetailScreenRouteProp>();

  const {data: movie, isLoading} = useMovieDetail(params.id);

  if (isLoading)
    return (
      <Container>
        <ActivityIndicator style={{flex: 1}} />
      </Container>
    );

  if (!movie) return null;

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
        <Spacing />
        <List title="설명" content={movie.description_full} />
        <List title="연도" content={`${movie.year}`} />
        <List title="평점" content={`${movie.rating}점`} />
        <List title="시간" content={`${movie.runtime}분`} />
        <Spacing />
        <Spacing />
      </Main>
    </Container>
  );
}
