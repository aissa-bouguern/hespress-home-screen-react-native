import React from 'react';
import {Text} from 'react-native';

const Title = ({children}) => (
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
);

export default Title;
