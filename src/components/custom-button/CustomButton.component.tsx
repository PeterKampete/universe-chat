import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import { primary } from '../../constants/colors';

interface IProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
  bgColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle
}

const CustomButton = ({ onPress, text, bgColor = primary, style, textStyle }: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: bgColor }, { ...style }]}
    >
      <Text style={{ color: '#fff', ...textStyle }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 14,
    height: DEVICE_HEIGHT * 0.065,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
