import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RootStackNavigationProp, RootStackParamList} from './types';
import MainTab from './MainTab';
import PhotoDetailScreen from './PhotoDetail/PhotoDetailScreen';
import PreviewScreen from './Preview/PreviewScreen';
import MovieDetailScreen from './MovieDetail/MovieDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Stack.Navigator screenOptions={{headerBackTitle: '닫기'}}>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="PhotoDetail" component={PhotoDetailScreen} />
      <Stack.Screen
        name="Preview"
        component={PreviewScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{
          headerTintColor: '#3834FF',
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back-ios"
              color="#3834FF"
              size={20}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
