import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import styles from './styles';
import { tabEnum } from './enum';
import {
  darkBlue,
  extraDarkBlue,
  lightBlue,
  white1,
} from '../../constants/colors';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import PieChart from '../../components/charts/PieChart';

const tabs = ['Local Storage', 'Cloud Storage'];

const LocalDocuments = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  // const animatedTranslateX = useSharedValue(0);

  // const animatedStyle = useAnimatedStyle(() => (
  //   {
  //     transform: [
  //       translateX: ,
  //     ]
  //   }
  // ))

  return (
    <LinearGradient
      colors={[white1, lightBlue]}
      useAngle
      angle={90}
      style={styles.container}
    >
      <View>
        <LinearGradient
          colors={[extraDarkBlue, darkBlue]}
          useAngle
          angle={45}
          style={styles.statsCard}
          locations={[0.5, 1]}
        >
          <PieChart />
          <View style={styles.rightStatsData}>
            <View>
              <Text style={styles.statsLabel}>Free Space</Text>
              <Text style={styles.statsValue}>
                128.0 <Text style={{ fontSize: 18 }}>GB</Text>
              </Text>
            </View>
            <View style={[styles.flexRow, { gap: 14 }]}>
              <View>
                <Text style={[styles.statsLabel, { fontSize: 12, marginBottom: 2 }]}>Total</Text>
                <Text
                  style={[
                    styles.statsValue,
                    {
                      fontSize: 18,
                    },
                  ]}
                >
                  128.0 <Text style={{ fontSize: 12 }}>GB</Text>
                </Text>
              </View>
              <View>
                <Text style={[styles.statsLabel, { fontSize: 12, marginBottom: 2 }]}>Usage</Text>
                <Text
                  style={[
                    styles.statsValue,
                    {
                      fontSize: 18,
                    },
                  ]}
                >
                  128.0 <Text style={{ fontSize: 12 }}>GB</Text>
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default LocalDocuments;
