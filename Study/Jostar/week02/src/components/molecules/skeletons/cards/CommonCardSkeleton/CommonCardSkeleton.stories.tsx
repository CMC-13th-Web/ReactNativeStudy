import { ComponentMeta, ComponentStory } from "@storybook/react";
import CommonCardSkeleton from "./CommonCardSkeleton";

export default {
  title: "컴포넌트/분자/스켈레톤/카드/CommonCardSkeleton",
  component: CommonCardSkeleton,
} as ComponentMeta<typeof CommonCardSkeleton>;

export const CommonCardSkeletonTest: ComponentStory<
  typeof CommonCardSkeleton
> = () => <CommonCardSkeleton />;
