import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { DEVICE_HEIGHT } from '../../constants/sizes';

const Settings = () => {
  return (
    <MainLayout
      childrenStyle={{
        paddingHorizontal: 20,
        paddingTop: DEVICE_HEIGHT * 0.03,
      }}
    >
      <Text style={{ color: 'white' }}>Settings</Text>
    </MainLayout>
  );
};

export default Settings;

const styles = StyleSheet.create({});
