import { StyleSheet, Text, TextProps, TextStyle, View } from 'react-native';
import React from 'react';
import { fontSizes } from '../../constants/fontSizes';

interface IProps extends TextProps {
  text: string;
  isHeading?: boolean;
  style?: TextStyle;
  color?: string;
}

const CustomText = ({ text, isHeading, style, color='#fff' }: IProps) => {
  return (
    <Text
      style={{
        color,
        fontSize: isHeading ? fontSizes._38 : 14,
        fontWeight: isHeading ? 'bold' : 'normal',
        ...style
      }}
    >
      {text}
    </Text>
  );
};

export default CustomText;
