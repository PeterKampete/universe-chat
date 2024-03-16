import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { BlurView } from '@react-native-community/blur';

interface IProps {
  children?: ReactNode | ReactNode[];
  style?: ViewStyle;
  blurAmount?: number;
}

const CustomBlurview = ({ children, style, blurAmount = 20 }: IProps) => {
  return (
    <>
      {children}
      <BlurView
        style={[styles.absolute, { ...style }]}
        blurType='light'
        blurAmount={blurAmount}
        reducedTransparencyFallbackColor='light'
      />
    </>
  );
};

export default CustomBlurview;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
