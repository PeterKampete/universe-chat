import { TextInput, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import styles from './styles';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import { lightAccent, lightGrey, secondary } from '../../constants/colors';

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
  rightWidth?: number;
  rightPadding?: number;
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
  borderColor = lightGrey,
  color = lightGrey,
  placeholder,
  rightWidth,
  rightPadding,
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
            color: 'rgba(255, 255, 255,0.6)',
          },
        ]}
        {...props}
      />

      {rightIcon && (
        <View
          style={[
            styles.icon,
            { height, width: rightWidth ?? height - 12, paddingRight: rightPadding ?? (rightIcon && 10) },
          ]}
        >
          {rightIcon()}
        </View>
      )}
    </View>
  );
};

export default CustomInput;
