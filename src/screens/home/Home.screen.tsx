import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  ChatItem,
  CustomBlurview,
  CustomInput,
  CustomText,
} from '../../components';
import styles from './styles';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { Ionicons } from '@expo/vector-icons';
import MainLayout from '../../layouts/MainLayout';

const Home = ({ navigation }) => {
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
            paddingBottom: DEVICE_HEIGHT * 0.08,
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
        <View style={styles.bottomInput}>
          <CustomInput
            placeholder='Write a message...'
            rightIcon={() => (
              <TouchableOpacity style={styles.sendIcon}>
                <Ionicons name='send' size={18} color='#fff' />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default Home;
