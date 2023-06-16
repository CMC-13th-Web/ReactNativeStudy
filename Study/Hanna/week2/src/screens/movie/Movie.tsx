import React from 'react';
import {FlatList, View, Text} from 'react-native';
import MovieCard from './MovieCard';
import {useGetMovies} from '../../hooks/useGetMovies';

const Movie = () => {
  const {data, hasNextPage, fetchNextPage, isLoading} = useGetMovies();
  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <View>
      {isLoading ? (
        <Text>로딩중</Text>
      ) : (
        <FlatList
          data={data?.pages.flatMap(page => page.data.movies)}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          renderItem={({item}) => (
            <MovieCard
              id={item.id}
              title={item.title}
              medium_cover_image={item.medium_cover_image}
              year={item.year}
            />
          )}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default Movie;
