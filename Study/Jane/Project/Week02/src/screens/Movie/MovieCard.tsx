import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {RootStackNavigationProp} from 'screens/types';
import {styled} from 'styled-components/native';

export interface MovieCardProps {
  id: string;
  title: string;
  imgSrc: string;
  year: string;
}

const Container = styled.View`
  background-color: white;
  overflow: hidden;

  margin-horizontal: 16px;
  margin-vertical: 8px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 160;
`;

const Info = styled.View`
  padding-top: 10;
  padding-horizontal: 16;
  padding-bottom: 8;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 16;
`;

const Year = styled.Text`
  font-size: 14;
  color: #949494;
`;

export default function MovieCard({id, title, imgSrc, year}: MovieCardProps) {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onPress = () => {
    navigation.navigate('MovieDetail', {id});
  };

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Container
        style={{
          borderRadius: 20,
          flex: 1 / 2,
        }}>
        <StyledImage
          source={{
            uri: imgSrc,
          }}
        />
        <Info>
          <Title>{title}</Title>
          <Year>{year}</Year>
        </Info>
      </Container>
    </TouchableNativeFeedback>
  );
}
