import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { paths } from '../paths';
import { Home, Settings } from '../../screens';

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={paths.SETTINGS} component={Settings} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
