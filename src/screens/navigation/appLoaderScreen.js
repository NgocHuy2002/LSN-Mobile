import React from 'react';

import { useSelector } from 'react-redux';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import * as SplashScreen from 'expo-splash-screen';


import { ROUTER } from "@constants/router";
import { selectToken } from '@containers/Auth/saga/selectors';

export default function AppLoaderScreen(props) {
  const { navigation } = props;
  const route = useRoute();
  console.log(route.name);

  // Assuming selectToken is a selector from Redux
  const token = useSelector(selectToken);

  React.useEffect(() => {
    if (token) {
      console.log('have token');
      navigation.replace(ROUTER.MAIN_NAVIGATOR);
    } else {
      console.log('dont have token');
      navigation.replace(ROUTER.AUTH_NAVIGATOR);
    }
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        SplashScreen.hideAsync();
      };
    }, []),
  );

  return null;
}
