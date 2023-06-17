import CommonCardSkeleton from "components/molecules/skeletons/cards/CommonCardSkeleton/CommonCardSkeleton";
import { View } from "react-native";
import { commonListSkeletonStyles } from "./CommonListSkeleton.style";

const CommonListSkeleton = () => {
  return (
    <View style={commonListSkeletonStyles.container}>
      {new Array(4).fill(1).map((_, index) => (
        <CommonCardSkeleton key={index} />
      ))}
    </View>
  );
};

export default CommonListSkeleton;
