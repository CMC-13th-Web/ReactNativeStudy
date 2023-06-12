import CommonCard from "components/molecules/cards/CommonCard/CommonCard";
import CommonListSkeleton from "components/organizations/skeletons/CommonListSkeleton/CommonListSkeleton";
import React from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import { Card } from "types/apps/card";

interface CommonListProps<T> {
  listData: T[] | undefined;
  handleCardClick: (item: T) => void;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => {};
  isFetching: boolean;
}

const CommonList = <T extends Card>({
  handleCardClick,
  listData,
  hasNextPage,
  fetchNextPage,
  isFetching,
}: CommonListProps<T>) => {
  return (
    <View>
      <FlatList
        numColumns={2}
        data={listData}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        keyExtractor={(item, index) => String(item.id)}
        ListFooterComponent={isFetching ? <CommonListSkeleton /> : undefined}
        renderItem={(cardElement) => (
          <CommonCard<T>
            key={cardElement.item.id}
            item={cardElement.item}
            handleClick={() => { handleCardClick(cardElement.item) }}
            addonInfo={"year"}
          />
        )}
      />
    </View>
  );
};

export default CommonList;
