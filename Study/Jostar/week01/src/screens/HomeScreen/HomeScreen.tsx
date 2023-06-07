import React from 'react';
import { View } from 'react-native';
import { homeScreenStyles } from './HomeScreen.style';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import ColorButton from 'components/atoms/buttons/ColorButton/ColorButton';
import { StackMenus } from 'constants/menus';

type RootParamList = {
  HomeDetailScreen: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const handleNavigateHomeDetail = () => {
    navigation.navigate(StackMenus.HomeDetailScreen);
  }
  return (
    <View style={homeScreenStyles.container}>
      <ColorButton 
        label={'홈 디테일로'} 
        color={'yellow'} 
        handleClick={handleNavigateHomeDetail}/>
    </View>
  );
};

export default HomeScreen;