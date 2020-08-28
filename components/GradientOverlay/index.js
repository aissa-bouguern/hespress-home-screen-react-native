import React from 'react';
import {Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientOverlay = ({children}) => (
  <LinearGradient
    locations={[0, 1]}
    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.75)']}
    style={[StyleSheet.absoluteFillObject]}>
    {children}
  </LinearGradient>
);

export default GradientOverlay;
