import {
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import React, { ReactNode } from 'react';
import styles from './styles';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import { lightAccent, secondary } from '../../constants/colors';

interface IProps {
  title?: string;
  bgColor?: string;
  fontSize?: number;
  rightIcon?: () => ReactNode;
  leftIcon?: () => ReactNode;
  height?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  color?: string;
  placeholder?: string;
  style?: ViewStyle;
  // Spread operator for additional props
  [propName: string]: any;
}

const CustomInput: React.FC<IProps> = ({
  title,
  bgColor = secondary,
  fontSize,
  rightIcon,
  leftIcon,
  height = DEVICE_HEIGHT * 0.07,
  borderRadius = 10,
  borderWidth = 0.3,
  borderColor = 'grey',
  color = 'grey',
  placeholder,
  style,
  ...props
}: IProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          height,
          borderRadius,
          borderWidth,
          borderColor,
          ...style,
        },
      ]}
    >
      {leftIcon && (
        <View style={[styles.icon, { left: 0, height, width: height - 8 }]}>
          {leftIcon()}
        </View>
      )}

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={color}
        cursorColor={lightAccent}
        style={[
          styles.input,
          {
            borderRadius,
            width: '100%',
            paddingLeft: leftIcon && height - 8,
            paddingRight: rightIcon && height - 8,
            color: '#fff',
          },
        ]}
        {...props}
      />

      {rightIcon && (
        <View style={[styles.icon, { height, width: height - 12, paddingRight: rightIcon && 10 }]}>
          {rightIcon()}
        </View>
      )}
    </View>
  );
};

export default CustomInput;