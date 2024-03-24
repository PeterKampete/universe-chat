import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import { paths } from './paths';
import { Documents, Home } from '../screens';
import { DEVICE_WIDTH } from '../constants/sizes';
import CustomDrawerContent from './CustomDrawerContent';
import { Ionicons } from '@expo/vector-icons';
import { lightAccent } from '../constants/colors';

const Drawer = createDrawerNavigator();

const DraweNavigation = () => {
  return (
    <Drawer.Navigator
    initialRouteName={paths.DOCUMENTS}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'transparent',
          width: DEVICE_WIDTH * 0.75,
          borderTopRightRadius: 40,
          borderBottomRightRadius: 40,
        },
        drawerItemStyle: {
          borderRadius: 0,
          width: '100%',
          marginLeft: 0,
        },
        drawerLabelStyle: {
          marginLeft: -10,
          paddingLeft: 0,
          fontSize: 15,
        },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: lightAccent,
        drawerActiveBackgroundColor: 'transparent',
        drawerType: 'slide',
        overlayColor: 'transparent',
        swipeEdgeWidth: DEVICE_WIDTH,
      }}
    >
      <Drawer.Screen
        name={paths.HOME}
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='home' size={size ? size : 24} color={color} />
          ),
          
        }}
      />
      <Drawer.Screen
        name={paths.DOCUMENTS}
        component={Documents}
        options={{
          title: 'Document Translation',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='document-text' size={size ? size : 24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DraweNavigation;
