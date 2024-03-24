import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import { CustomText } from '../../components';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';

const Settings = ({ navigation }) => {
  return (
    <MainLayout
      childrenStyle={{
        paddingHorizontal: 20,
        paddingTop: DEVICE_HEIGHT * 0.07,
      }}
    >
      <TouchableOpacity
        style={{ padding: 10, marginBottom: DEVICE_HEIGHT * 0.04 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name='chevron-back' size={20} color='#fff' />
      </TouchableOpacity>
      <View style={[styles.flex, { marginBottom: DEVICE_HEIGHT * 0.04 }]}>
        <Image
          source={require('../../assets/images/me.jpg')}
          style={styles.profile}
        />
        <CustomText
          text='Findo Peter Kampete'
          style={{
            fontWeight: 'bold',
            marginLeft: 5,
          }}
        />
      </View>
      <View style={styles.section}>
        <CustomText
          text='Account'
          style={{
            fontWeight: 'bold',
            marginLeft: 5,
          }}
        />
        <TouchableOpacity style={styles.flex}>
          <CustomText text='Email' />
          <Ionicons name='mail-outline' size={24} color='red' />
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default Settings;
