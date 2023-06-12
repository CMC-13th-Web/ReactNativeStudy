import { ComponentMeta, ComponentStory } from "@storybook/react";
import CommonListSkeleton from "./CommonListSkeleton";

export default {
  title: "컴포넌트/조직/스켈레톤/카드/CommonListSkeleton",
  component: CommonListSkeleton,
} as ComponentMeta<typeof CommonListSkeleton>;

export const CommonListSkeletonTest: ComponentStory<
  typeof CommonListSkeleton
> = () => <CommonListSkeleton />;
