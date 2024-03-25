import {
  Alert,
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
  lightAccent,
  lightBlue,
  primary,
  white1,
} from '../../constants/colors';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { CustomButton, CustomText, Fab, PieChart } from '../../components';
import { uploadTypes } from '../../constants/uploadTypes';
import { translatedFiles } from '../../constants/translatedFiles';
import SwipeModal from '@birdwingo/react-native-swipe-modal';
import DocumentPicker from 'react-native-document-picker';
import {
  AZURE_DOCUMENT_TRANSLATOR_API_VERSION,
  azureTranslationAxiosInstance,
  BASE_URL_AZURE_DOCUMENT_TRANSLATOR,
} from '../../config/config';
import { AZURE_TRANSLATOR_API_KEY } from '@env';
import { languages } from '../../constants/languages';
import { documentTypes } from '../../constants/documentTypes';
import { Circle } from 'react-native-progress';

const LocalDocuments = () => {
  const swipeRef = useRef(null);
  const documentSelectedRefSwipeRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState(null);
  const [translatedDocument, setTranslatedDocument] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const selectDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: documentTypes,
      });

      if (res) {
        setSelectedFile(res?.[0]);
        documentSelectedRefSwipeRef.current?.show();
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
      }
    }
  };

  const translateDocument = async () => {
    if (!selectedFile || !targetLanguage) {
      Alert.alert('Please select a file and target language');
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('document', {
        uri: selectedFile.uri,
        name: selectedFile.name,
        type: `${selectedFile.type};charset=utf-8`,
      } as any);
      formData.append('sourceLanguage', 'en');
      formData.append('targetLanguage', targetLanguage?.key);

      const response = await azureTranslationAxiosInstance.post(
        `${BASE_URL_AZURE_DOCUMENT_TRANSLATOR}/translator/document:translate?api-version=${AZURE_DOCUMENT_TRANSLATOR_API_VERSION}`,
        formData,
        {
          headers: {
            'Ocp-Apim-Subscription-Key': AZURE_TRANSLATOR_API_KEY,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('response', response);
      setTranslatedDocument(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error translating document:', error);
      Alert.alert('Error translating document');
      setLoading(false);
    }
  };

  const clearInputs = () => {
    setLoading(false);
    setSelectedFile(null);
    setTargetLanguage('');
    setTranslatedDocument(null);
  };

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
              onPress={type.id === 0 && selectDocument}
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
            <TouchableOpacity onPress={() => swipeRef.current?.show()}>
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
        closeOnPressBack
      >
        <View style={{ flex: 1, paddingVertical: 10 }}>
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
      <SwipeModal
        ref={documentSelectedRefSwipeRef}
        style={[
          styles.swipeModal,
          { borderTopRightRadius: 20, borderTopLeftRadius: 20 },
        ]}
        bg={'#fff'}
        fixedHeight
        maxHeight={DEVICE_HEIGHT * 0.58}
        topOffset={DEVICE_HEIGHT * 0.08}
        onHide={clearInputs}
        scrollEnabled
        closeOnPressBack
      >
        <Text style={styles.recentHeading}>Select Target Language</Text>
        <View style={styles.languagesView}>
          {languages.map((lang) => (
            <TouchableOpacity
              key={lang.key}
              style={[
                styles.langItem,
                {
                  backgroundColor:
                    targetLanguage?.value === lang.value ? darkBlue : '#fff',
                },
              ]}
              onPress={() => setTargetLanguage(lang)}
            >
              <Text
                style={{
                  color:
                    targetLanguage?.value === lang.value ? '#fff' : darkBlue,
                }}
              >
                {lang.value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={[
            styles.translateView,
            {
              backgroundColor: isSuccess ? 'green' : extraDarkBlue,
            },
          ]}
        >
          <View style={[styles.flexRow, { height: '100%' }]}>
            {isTranslating ? (
              <Circle
                size={45}
                borderWidth={3}
                thickness={3}
                progress={0.4}
                unfilledColor={lightBlue}
                color={'#fff'}
                animated
                showsText
                textStyle={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#fff',
                }}
                style={{ marginRight: 10 }}
              />
            ) : (
              <Image
                source={require('../../assets/images/document-white.png')}
                style={styles.uploadTypeIcon}
              />
            )}

            <View>
              <Text
                style={[
                  styles.uploadTypeTitle,
                  { color: '#fff', marginBottom: 2 },
                ]}
              >
                {isTranslating && 'Translating '}
                {'Awa and Sons.pdf'}
                {isTranslating && ' ... '}
              </Text>
              <Text
                style={[
                  styles.uploadTypeLabel,
                  { color: lightAccent, fontSize: 13 },
                ]}
              >
                {'English - Zulu'}
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            {isSuccess && (
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/download-white.png')}
                  style={[
                    styles.uploadTypeIcon,
                    { width: DEVICE_WIDTH * 0.07, marginRight: 26 },
                  ]}
                />
              </TouchableOpacity>
            )}
            {isTranslating ? (
              <TouchableOpacity onPress={() => setIsTranslating(false)}>
                <Ionicons name='stop-circle' size={24} color={'#fff'} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setIsTranslating(true)}>
                <Image
                  source={require('../../assets/images/translate-white.png')}
                  style={[
                    styles.uploadTypeIcon,
                    { width: DEVICE_WIDTH * 0.08 },
                  ]}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SwipeModal>
      <Fab onPress={selectDocument} />
    </LinearGradient>
  );
};

export default LocalDocuments;
