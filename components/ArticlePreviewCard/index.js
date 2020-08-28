import React from 'react';

// components
import Title from '../Title';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const width = Dimensions.get('window').width;

const CardContainer = ({children}) => (
  <View
    style={{
      height: 300,
      width: width - 16,
      left: 8,
      marginTop: 8,
      borderRadius: 2,
      overflow: 'hidden',
      backgroundColor: '#673270',
    }}>
    {children}
  </View>
);

const CategoryContainer = ({children}) => (
  <View
    style={{
      position: 'absolute',
      left: 14,
      top: 14,
      zIndex: 1,
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: 'rgba(103, 50,112,.85)',
    }}>
    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>
      {children}
    </Text>
  </View>
);

const PostMetasContainer = ({children}) => (
  <View style={{paddingHorizontal: 10, paddingVertical: 8}}>
    <Text style={{color: 'white', fontSize: 16}}>{children}</Text>
  </View>
);

const ArticlePreviewCard = ({title, imageUrl, category}) => {
  return (
    <CardContainer>
      <ImageBackground
        source={{uri: imageUrl}}
        resizeMode="cover"
        style={{...StyleSheet.absoluteFillObject, justifyContent: 'flex-end'}}>
        <CategoryContainer>{category}</CategoryContainer>
        <PostMetasContainer>4 hours ago - 30 comments</PostMetasContainer>
        <Title color="#fff">{title}</Title>
      </ImageBackground>
    </CardContainer>
  );
};

export default ArticlePreviewCard;
