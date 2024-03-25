import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import styles from './styles';
import { tabEnum } from './enum';
import {
  darkBlue,
  extraDarkBlue,
  lightBlue,
  white1,
} from '../../constants/colors';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { Fab, PieChart } from '../../components';
import { uploadTypes } from '../../constants/uploadTypes';
import { translatedFiles } from '../../constants/translatedFiles';
import SwipeModal from '@birdwingo/react-native-swipe-modal';

const tabs = ['Local Storage', 'Cloud Storage'];

const LocalDocuments = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const swipeRef = useRef(null);

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
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
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
                <Text
                  style={[styles.statsLabel, { fontSize: 12, marginBottom: 2 }]}
                >
                  Total
                </Text>
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
                <Text
                  style={[styles.statsLabel, { fontSize: 12, marginBottom: 2 }]}
                >
                  Usage
                </Text>
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
        <View style={styles.uploadTypes}>
          {uploadTypes.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={[
                styles.uploadType,
                {
                  opacity: type.id !== 0 ? 0.4 : 1,
                },
              ]}
              disabled={type.id !== 0}
            >
              <Image source={type.icon} style={styles.uploadTypeIcon} />
              <View>
                <Text style={styles.uploadTypeTitle}>{type.title}</Text>
                <Text style={styles.uploadTypeLabel}>{type.space} GB</Text>
              </View>
              {type.id === 0 && (
                <View style={styles.uploadTypePlusIcon}>
                  <Ionicons name='add' color='#fff' size={10} />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <View
            style={[
              styles.flexRow,
              {
                justifyContent: 'space-between',
                marginBottom: DEVICE_HEIGHT * 0.02,
              },
            ]}
          >
            <Text style={styles.recentHeading}>Recents</Text>
            <TouchableOpacity>
              <Text style={styles.recentHeading}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recents}>
            {translatedFiles.map((file) => (
              <TouchableOpacity
                key={file.id}
                style={[styles.uploadType, styles.recentItem]}
              >
                <View style={[styles.flexRow, { height: '100%' }]}>
                  <Image
                    source={require('../../assets/images/documents.png')}
                    style={[styles.uploadTypeIcon, styles.recentIcon]}
                  />
                  <View>
                    <Text style={styles.uploadTypeTitle}>{file.title}</Text>
                    <Text style={styles.uploadTypeLabel}>{file.space} GB</Text>
                  </View>
                </View>
                <Text style={styles.recentDate}>{file.date}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <SwipeModal
        ref={swipeRef}
        style={styles.swipeModal}
        bg={'#fff'}
        fixedHeight
        maxHeight={DEVICE_HEIGHT * 0.93}
        topOffset={DEVICE_HEIGHT * 0.08}
      >
        <View style={{ flex: 1, paddingHorizontal: 30, paddingVertical: 10 }}>
          <View style={styles.recents}>
            {translatedFiles.map((file) => (
              <TouchableOpacity
                key={file.id}
                style={[styles.uploadType, styles.recentItem]}
              >
                <View style={[styles.flexRow, { height: '100%' }]}>
                  <Image
                    source={require('../../assets/images/documents.png')}
                    style={[styles.uploadTypeIcon, styles.recentIcon]}
                  />
                  <View>
                    <Text style={styles.uploadTypeTitle}>{file.title}</Text>
                    <Text style={styles.uploadTypeLabel}>{file.space} GB</Text>
                  </View>
                </View>
                <Text style={styles.recentDate}>{file.date}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SwipeModal>
      <Fab onPress={() => swipeRef.current?.show()} />
    </LinearGradient>
  );
};

export default LocalDocuments;
