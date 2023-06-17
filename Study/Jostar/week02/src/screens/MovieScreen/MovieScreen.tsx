import { NavigationProp, useNavigation } from "@react-navigation/native";
import CommonList from "components/organizations/lists/CommonList/CommonList";
import { StackMenus } from "constants/menus";
import { useMovieQuery } from "hooks/movies/useMovieQuery";
import React from "react";
import { View, Text } from "react-native";
import { Movie } from "types/movie";

type RootParamList = {
  MovieDetailScreen: { movie: Movie } | undefined;
};

const MovieScreen = () => {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const { data, fetchNextPage, isFetching, hasNextPage, isError } = useMovieQuery();
  const handleClick = (movie: Movie) => {
    navigation.navigate("MovieDetailScreen", {
      movie: movie,
    });
  };
  return (
    <View>
      {isError ? (
        <View>
          <Text>
            서버상의 오류로 데이터를 못가져왔습니다.
          </Text>
        </View>
      ) : (
        <CommonList<Movie>
          listData={data?.pages.map((page) => page.movies).flat()}
          handleCardClick={handleClick}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetching={isFetching}
        />
      )}
    </View>
  );
};

export default MovieScreen;
