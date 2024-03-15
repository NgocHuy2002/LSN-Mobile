import React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import AppLoaderScreen from './appLoaderScreen';

import { ROUTER } from '@constants/router';
import { HomeScreen } from '@containers/HomeScreen';
import MenuScreen from '@containers/MenuScreen';
import { PostsScreen } from '@containers/PostsScreen';
import { useSelector } from 'react-redux';
import { selectToken } from '@containers/Auth/saga/selectors';


const Stack = createStackNavigator();

export default function SubMainNavigator({ navigation }) {
  const token = useSelector(selectToken);

  React.useEffect(() => {
    if (token) {
      navigation.replace(ROUTER.MAIN_NAVIGATOR);
    } else {
      navigation.replace(ROUTER.AUTH_NAVIGATOR);
    }
  }, []);
  return (
    <Stack.Navigator
      headerMode="none"
    >
      <Stack.Screen name={ROUTER.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTER.MENU} component={MenuScreen} />
      <Stack.Screen name={ROUTER.POSTS} component={PostsScreen} />
    </Stack.Navigator>
  );
}
