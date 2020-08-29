import React from 'react';

import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import dayjs from 'dayjs';

var relativeTime = require('dayjs/plugin/relativeTime');

import Title from '../Title';

import GradientOverlay from '../GradientOverlay';

dayjs.extend(relativeTime);

const width = Dimensions.get('window').width;

const CardContainer = ({children}) => (
  <View
    style={{
      height: 280,
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
  <View style={{paddingVertical: 8, zIndex: 1}}>
    <Text style={{color: 'white', fontSize: 16}}>{children}</Text>
  </View>
);

const ArticlePreviewCard = ({
  title,
  imageUrl,
  category,
  nbComments,
  publishedAt,
}) => {
  return (
    <CardContainer>
      <ImageBackground
        source={{uri: imageUrl}}
        resizeMode="cover"
        style={{...StyleSheet.absoluteFillObject, justifyContent: 'flex-end'}}>
        <CategoryContainer>{category}</CategoryContainer>

        <View
          style={{
            position: 'relative',
            paddingHorizontal: 10,
            paddingBottom: 15,
          }}>
          <PostMetasContainer>
            {dayjs(publishedAt).fromNow()} - {nbComments}{' '}
            {nbComments <= 1 ? 'comment' : 'comments'}
          </PostMetasContainer>
          <Title color="#fff">{title}</Title>
          <GradientOverlay />
        </View>
      </ImageBackground>
    </CardContainer>
  );
};

export default ArticlePreviewCard;
