import React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import AppLoaderScreen from './appLoaderScreen';

import * as ROUTES from '../../constants/router.js';

import AuthNavigator from './authNavigation.js';
import MainNavigator from './mainNavigation.js';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      // headerMode="none"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name={ROUTES.APP_LOADER} component={AppLoaderScreen} />
      <Stack.Screen name={ROUTES.AUTH_NAVIGATOR} component={AuthNavigator} />
      <Stack.Screen name={ROUTES.MAIN_NAVIGATOR} component={MainNavigator} />
    </Stack.Navigator>
  );
}
