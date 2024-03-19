import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import { CustomText } from '../../components';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

const Settings = () => {
  return (
    <MainLayout
      childrenStyle={{
        paddingHorizontal: 20,
        paddingTop: DEVICE_HEIGHT * 0.03,
      }}
    >
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
