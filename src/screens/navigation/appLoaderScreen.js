import React from 'react';

import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import * as SplashScreen from 'expo-splash-screen';

// import { selectToken } from '@containers/Auth/selectors';

import * as ROUTES from '../../constants/router.js';

export default function AppLoaderScreen(props) {
  const { navigation } = props;

//   const token = useSelector(selectToken);
const token = 'ssss'
  React.useEffect(() => {
    if (token) {
      navigation.replace(ROUTES.MAIN_NAVIGATOR);
    } else {
      navigation.replace(ROUTES.AUTH_NAVIGATOR);
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
