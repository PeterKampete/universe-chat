import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { Ionicons } from '@expo/vector-icons';
import { darkBlue, extraDarkBlue } from '../../constants/colors';

interface IProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const Fab = ({ onPress }: IProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name='add' color='#fff' size={24} />
    </TouchableOpacity>
  );
};

export default Fab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: extraDarkBlue,
    width: DEVICE_HEIGHT * 0.06,
    height: DEVICE_HEIGHT * 0.06,
    right: DEVICE_WIDTH * 0.08,
    top: DEVICE_HEIGHT * 0.31,
    position: 'absolute',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
