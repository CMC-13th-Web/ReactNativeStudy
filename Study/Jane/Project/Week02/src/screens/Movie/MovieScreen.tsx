import React from 'react';
import {FlatList} from 'react-native';
import MovieCard, {MovieCardProps} from './MovieCard';
import {styled} from 'styled-components/native';

const dummy: MovieCardProps[] = [
  {
    id: '1',
    title: 'Paris',
    imgSrc:
      'https://plus.unsplash.com/premium_photo-1676638972162-99c667d08938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    year: '2023',
  },
  {
    id: '2',
    title: 'Paris',
    imgSrc:
      'https://plus.unsplash.com/premium_photo-1676638972162-99c667d08938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    year: '2023',
  },
  {
    id: '3',
    title: 'Paris',
    imgSrc:
      'https://plus.unsplash.com/premium_photo-1676638972162-99c667d08938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    year: '2023',
  },
];

const StyledView = styled.ScrollView`
  flex: 1;

  padding-horizontal: 8;
  padding-top: 16;
`;

export default function MovieScreen() {
  return (
    <StyledView>
      <FlatList
        data={dummy}
        scrollEnabled={false}
        numColumns={2}
        contentContainerStyle={{flex: 1}}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <MovieCard
            id={item.id}
            title={item.title}
            imgSrc={item.imgSrc}
            year={item.year}
          />
        )}
      />
    </StyledView>
  );
}
