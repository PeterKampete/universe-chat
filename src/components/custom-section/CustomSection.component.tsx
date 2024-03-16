import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import CustomText from '../custom-text/CustomText.component';
import { fontSizes } from '../../constants/fontSizes';

interface IProps {
  children?: ReactNode | ReactNode[];
  heading?: string;
  style?: ViewStyle;
  textStyle?: TextStyle
}

const CustomSection = ({ heading, children, style, textStyle }: IProps) => {
  return (
    <View style={{ marginBottom: 30, paddingHorizontal: 20, ...style }}>
      <CustomText text={heading} style={{ marginBottom: 12, fontSize: 16, ...textStyle }} />
      {children}
    </View>
  );
};

export default CustomSection;
