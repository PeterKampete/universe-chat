import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import styles from './styles';
import { CustomBlurview } from '../components';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../constants/sizes';

interface IProps {
  children?: ReactNode | ReactNode[];
  childrenStyle?: ViewStyle;
}

const MainLayout = ({ children, childrenStyle }: IProps) => {
  return (
    <View style={styles.container}>
      <CustomBlurview style={{ backgroundColor: 'rgba(0,0,0,0.93)' }}>
        <View
          style={[
            styles.patch,
            { position: 'absolute', right: DEVICE_WIDTH * 0.4, top: -20 },
          ]}
        />
        <View
          style={[styles.patch, { position: 'absolute', bottom: 0, left: -16 }]}
        />
      </CustomBlurview>
      <View
        style={{
          flex: 1,
          paddingTop: DEVICE_HEIGHT * 0.08,
          paddingHorizontal: 20,
          ...childrenStyle,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default MainLayout;
