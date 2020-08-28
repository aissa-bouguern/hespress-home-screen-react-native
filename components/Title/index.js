import React from 'react';
import {Text, View} from 'react-native';

import GradientOverlay from '../GradientOverlay';

const Title = ({children}) => (
  <View
    style={{
      position: 'relative',
      paddingHorizontal: 10,
      paddingBottom: 15,
    }}>
    <Text
      style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        lineHeight: 26,
        zIndex: 1,
      }}>
      {children}
    </Text>
    <GradientOverlay />
  </View>
);

export default Title;
