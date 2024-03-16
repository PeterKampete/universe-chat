import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { paths } from '../paths';
import { Home } from '../../screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={paths.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
