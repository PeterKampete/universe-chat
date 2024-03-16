import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { paths } from './paths';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth, Suggestions, Welcome } from '../screens';
import DraweNavigation from './DraweNavigation';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
