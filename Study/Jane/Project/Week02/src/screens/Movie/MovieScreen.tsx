import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {styled} from 'styled-components/native';
import MovieCard from './MovieCard';
import useMovieList from 'hooks/useMovieList';

const StyledView = styled.View`
  flex: 1;
`;

export default function MovieScreen() {
  const {
    data: movies,
    fetchNextPage,
    hasNextPage,
    isInitialLoading,
  } = useMovieList();

  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <StyledView>
      {isInitialLoading ? (
        <ActivityIndicator style={{flex: 1}} />
      ) : (
        <FlatList
          data={movies?.pages.flatMap(x => x.data.movies)}
          style={{paddingHorizontal: 8, paddingTop: 16, flex: 1}}
          numColumns={2}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <MovieCard
              id={item.id}
              title={item.title}
              medium_cover_image={item.medium_cover_image}
              year={item.year}
            />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
        />
      )}
    </StyledView>
  );
}
