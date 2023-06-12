import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { commonCardSkeletonStyles } from "./CommonCardSkeleton.style";

const CommonCardSkeleton = () => {
  return (
    <View style={commonCardSkeletonStyles.container}>
      <SkeletonPlaceholder borderRadius={10}>
        <View>
          <View style={commonCardSkeletonStyles.image}></View>
          <View style={commonCardSkeletonStyles.title}></View>
          <View style={commonCardSkeletonStyles.description}></View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

export default CommonCardSkeleton;
