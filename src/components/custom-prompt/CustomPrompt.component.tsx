import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { ReactNode } from 'react';
import styles from './styles';
import CustomText from '../custom-text/CustomText.component';

interface IProps {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  icon: ReactNode;
}

const CustomPrompt = ({ text, onPress, icon }: IProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <CustomText text={text} />
    </TouchableOpacity>
  );
};

export default CustomPrompt;
