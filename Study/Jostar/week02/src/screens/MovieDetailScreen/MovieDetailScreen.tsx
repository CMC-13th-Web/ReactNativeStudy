import { RouteProp, useRoute } from '@react-navigation/native';
import { useMovieDetailQuery } from 'hooks/movies/useMovieDetailQuery';
import React from 'react';
import { Text, Image } from 'react-native';
import { Container, Content, MovieMainContainer, MovieImage, MovieTitle, TextContainer, ContentText } from './MovieDetailScreen.style';
import { Movie } from 'types/movie';

type ParamList = {
  movieType: {
    movie: Movie;
  };
};

const MovieDetailScreen = () => {
  const { params } = useRoute<RouteProp<ParamList, "movieType">>();
  // const { data: movie } = useMovieDetailQuery(params.id);
  return (
    <Container>
      <Image source={{uri: params.movie?.large_cover_image}} style={{
        width: 300,
        height: 500
      }}/>
      <MovieTitle>{params.movie?.title}</MovieTitle>
      <TextContainer>
        <ContentText>설명</ContentText>
        <Content>{params.movie?.description_full}</Content>
      </TextContainer>
      <TextContainer>
        <ContentText>연도</ContentText>
        <Content>{params.movie?.year}</Content>
      </TextContainer>
      <TextContainer>
        <ContentText>평점</ContentText>
        <Content>{params.movie?.rating}</Content>
      </TextContainer>
      <TextContainer>
        <ContentText>시간</ContentText>
        <Content>{params.movie?.runtime}</Content>
      </TextContainer>
    </Container>
  );
};

export default MovieDetailScreen;