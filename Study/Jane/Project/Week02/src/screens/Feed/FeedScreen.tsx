import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, SafeAreaView, View} from 'react-native';
import {styled} from 'styled-components/native';
import {usePhotoStore} from 'stores/PhotoStore';

const StyledView = styled.ScrollView`
  padding-horizontal: 16;
  flex: 1;
`;

const StyledText = styled.Text`
  padding-top: 16;
  padding-bottom: 8;
  font-size: 16;
  color: #949494;
`;

export default function FeedScreen() {
  const {photos} = usePhotoStore();

  const [imageSize, setImageSize] = useState({width: 0, height: 0});

  useEffect(() => {
    const screenWidth = Dimensions.get('window').width;
    const imageSize = screenWidth / 3 - 8;
    setImageSize({width: imageSize, height: imageSize});
  }, [photos.length]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StyledView>
        <FlatList
          ListHeaderComponent={<StyledText>Today</StyledText>}
          data={photos}
          scrollEnabled={false}
          numColumns={3}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <Image
                source={{uri: item.path}}
                style={{
                  resizeMode: 'cover',
                  flex: 1 / 3,
                  width: imageSize.width,
                  height: imageSize.height,
                }}
              />
            </View>
          )}
        />
      </StyledView>
    </SafeAreaView>
  );
}
