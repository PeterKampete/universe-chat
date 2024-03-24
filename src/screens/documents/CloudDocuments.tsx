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

const CloudDocuments = () => {
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
      {/* <TouchableOpacity
        style={{ paddingVertical: 10, marginBottom: DEVICE_HEIGHT * 0.04 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name='chevron-back' size={20} color='#fff' />
      </TouchableOpacity> */}
      <View style={styles.tabNav}>
        {tabs.map((tab) => (
          <Animated.View key={tab} style={{ width: '50%' }}>
            <TouchableOpacity
              onPress={() => setActiveTab(tab)}
              style={[
                styles.navItem,
                {
                  backgroundColor: activeTab === tab ? '#fff' : 'transparent',
                },
              ]}
            >
              <Text
                style={[
                  styles.navText,
                  {
                    fontWeight: activeTab === tab ? 'bold' : 'normal',
                    color: activeTab === tab ? '#000' : 'rgba(42, 51, 67,0.5)',
                  },
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
      <View>
        <LinearGradient
          colors={[extraDarkBlue, darkBlue]}
          useAngle
          angle={40}
          style={styles.statsCard}
          locations={[0.5, 1]}
        >
          <PieChart />
          <View style={styles.rightStatsData}>
            <Text>akjsbcaksb</Text>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default CloudDocuments;
