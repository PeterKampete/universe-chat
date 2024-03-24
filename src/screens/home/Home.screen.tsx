import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  ChatItem,
  CustomBlurview,
  CustomButton,
  CustomInput,
  CustomText,
} from '../../components';
import styles from './styles';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { Ionicons, Entypo } from '@expo/vector-icons';
import MainLayout from '../../layouts/MainLayout';
import { AZURE_TRANSLATOR_API_KEY } from '@env';
import { lightAccent, lightGrey, primary } from '../../constants/colors';
import DocumentPicker from 'react-native-document-picker';
import { documentTypes } from '../../constants/documentTypes';
import {
  AZURE_DOCUMENT_TRANSLATOR_API_VERSION,
  azureTranslationAxiosInstance,
  BASE_URL_AZURE_DOCUMENT_TRANSLATOR,
} from '../../config/config';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { languages } from '../../constants/languages';

const Home = ({ navigation }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState(null);
  const [translatedDocument, setTranslatedDocument] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const animatedHeight = useSharedValue(0);
  const OFFSET = DEVICE_HEIGHT * 0.1;

  const animatedStyles = useAnimatedStyle(() => ({
    height: open ? withSpring(OFFSET / 0.16) : withTiming(OFFSET),
  }));

  const selectDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: documentTypes,
      });

      if (res) {
        setSelectedFile(res?.[0]);
        setOpen(true);
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
        },
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

  return (
    <MainLayout>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 15,
        }}
      >
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            source={require('../../assets/images/four-dots.png')}
            style={{
              width: 25,
              height: 25,
              opacity: 0.7,
            }}
          />
        </TouchableOpacity>
        <View style={styles.topText}>
          <CustomText text='Universe Chat' />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 40,
            paddingBottom: DEVICE_HEIGHT * 0.1,
          }}
          showsVerticalScrollIndicator={false}
        >
          <ChatItem text='acbkajsbckajsbcjkascbaksjcbaksjcbj kabscjkasb jkasbcajsbckj' />
          <ChatItem isAssitant text='acbkajsbckajsbcjkascbaksjcbaksjcbj' />
          <ChatItem text='acbkajsbckajsbcjkascbaksjcbaksjcbj kabscjkasb jkasbcajsbckj' />
          <ChatItem isAssitant text='acbkajsbckajsbcjkascbaksjcbaksjcbj' />
          <ChatItem text='acbkajsbckajsbcjkascbaksjcbaksjcbj kabscjkasb jkasbcajsbckj' />
          <ChatItem isAssitant text='acbkajsbckajsbcjkascbaksjcbaksjcbj' />
          <ChatItem text='acbkajsbckajsbcjkascbaksjcbaksjcbj kabscjkasb jkasbcajsbckj' />
          <ChatItem isAssitant text='acbkajsbckajsbcjkascbaksjcbaksjcbj' />
          <ChatItem text='acbkajsbckajsbcjkascbaksjcbaksjcbj kabscjkasb jkasbcajsbckj' />
          <ChatItem isAssitant text='acbkajsbckajsbcjkascbaksjcbaksjcbj' />
          <ChatItem text='acbkajsbckajsbcjkascbaksjcbaksjcbj kabscjkasb jkasbcajsbckj' />
          <ChatItem isAssitant text='acbkajsbckajsbcjkascbaksjcbaksjcbj' />
        </ScrollView>
      </View>
      <Animated.View
        style={[styles.bottomInput, { height: animatedHeight }, animatedStyles]}
      >
        {open && (
          <View style={styles.translateView}>
            <View
              style={[
                styles.flex,
                {
                  marginBottom: 20,
                  paddingHorizontal: 16,
                  marginTop: 10,
                  justifyContent: 'space-between',
                },
              ]}
            >
              <View style={styles.flex}>
                <Image
                  source={require('../../assets/images/document.png')}
                  style={styles.thumbnail}
                />
                <CustomText text={selectedFile?.name} numberOfLines={1} />
              </View>
              <CustomText
                text={targetLanguage?.value}
                numberOfLines={1}
                style={{ color: primary }}
              />
            </View>
            <View style={{ height: DEVICE_HEIGHT * 0.28 }}>
              <ScrollView
                contentContainerStyle={{
                  alignItems: 'center',
                  gap: 26,
                  paddingVertical: DEVICE_HEIGHT * 0.02,
                }}
              >
                {languages.map((lang) => (
                  <TouchableOpacity
                    key={lang.key}
                    onPress={() => setTargetLanguage(lang)}
                  >
                    <Text style={styles.langText}>{lang.value}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => {
                setOpen(false);
                setSelectedFile(null);
              }}
            >
              <Ionicons name='close' size={24} color={lightAccent} />
            </TouchableOpacity>
            <CustomButton
              text='Translate'
              onPress={translateDocument}
              style={{
                height: DEVICE_HEIGHT * 0.06,
                marginTop: 20,
                borderRadius: 10,
              }}
              bgColor='#fff'
              textStyle={{ color: '#000' }}
              loading={loading}
            />
          </View>
        )}
        <CustomInput
          placeholder='Write a message...'
          rightIcon={() => (
            <View style={styles.flex}>
              <TouchableOpacity onPress={selectDocument}>
                <Entypo name='attachment' size={20} color={lightAccent} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.sendIcon}>
                <Ionicons name='send' size={18} color={lightAccent} />
              </TouchableOpacity>
            </View>
          )}
          rightWidth={DEVICE_WIDTH * 0.23}
          width='82%'
          style={{ width: '90%', alignSelf: 'center' }}
        />
      </Animated.View>
    </MainLayout>
  );
};

export default Home;
