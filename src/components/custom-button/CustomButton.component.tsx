import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, { ReactNode } from 'react';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { primary } from '../../constants/colors';
import LottieView from 'lottie-react-native';

const renderLottie = () => (
  <LottieView
    source={require('../../assets/lottie/sirri-listening.json')}
    autoPlay
    loop
    style={styles.animatedBall}
    duration={2000}
  />
);

interface IProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
  bgColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  rightIcon?: () => ReactNode;
  leftIcon?: () => ReactNode;
  loading?: boolean;
}

const CustomButton = ({
  onPress,
  text,
  bgColor = primary,
  style,
  leftIcon,
  rightIcon,
  textStyle,
  loading,
}: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: bgColor }, { ...style }]}
    >
      {loading ? (
        renderLottie()
      ) : (
        <>
          {leftIcon && leftIcon?.()}
          <Text style={{ color: '#fff', ...textStyle }}>{text}</Text>
          {rightIcon && rightIcon?.()}
        </>
      )}
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
    flexDirection: 'row',
    gap: 10,
  },
  animatedBall: {
    width: '100%',
    height: DEVICE_HEIGHT * 0.06,
    marginLeft: 10,
  },
});
