import React from 'react';

import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import * as SplashScreen from 'expo-splash-screen';


import { router } from '@constants/router';

export default function AppLoaderScreen(props) {
  const { navigation } = props;

  const token = useSelector(state => state.router.route);

  React.useEffect(() => {
    if (token) {
      navigation.replace(router.MAIN_NAVIGATOR);
    } else {
      navigation.replace(router.AUTH_NAVIGATOR);
    }
  }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     return () => {
  //       SplashScreen.hideAsync();
  //     };
  //   }, []),
  // );

  return null;
}
