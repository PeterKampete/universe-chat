import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { paths } from './paths';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth, Suggestions, Welcome } from '../screens';
import DraweNavigation from './DraweNavigation';
import SettingsStack from './stacks/SettingsStack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={paths.DRAWERNAVIGATION}
      >
        <Stack.Screen name={paths.WELCOME} component={Welcome} />
        <Stack.Screen name={paths.AUTH} component={Auth} />
        <Stack.Screen name={paths.SUGGESTIONS} component={Suggestions} />
        <Stack.Screen
          name={paths.DRAWERNAVIGATION}
          component={DraweNavigation}
        />
        <Stack.Screen name={paths.SETTINGSSTACK} component={SettingsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
