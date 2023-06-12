import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackMenus } from "constants/menus";
import { Container, Image, Title, Description } from "./CommonCard.style";
import { Card } from "types/apps/card";
import { Movie } from "types/movie";

interface CommonCardProps<T> {
  item: T;
  handleClick: () => void;
  addonInfo: string;
}

const CommonCard = <T extends Card>({ item, handleClick, addonInfo }: CommonCardProps<T>) => {
  return (
    <Container onPress={handleClick}>
      <Image
        source={{ uri: item.medium_cover_image as string }}
      />
      <Title>{item.title}</Title>
      <Description>{item[addonInfo] as string}</Description>
    </Container>
  );
};

export default CommonCard;
