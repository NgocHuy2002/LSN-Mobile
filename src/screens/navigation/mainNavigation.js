import React from 'react';
import { useSelector } from 'react-redux';

import { tw } from 'react-native-tailwindcss';
import { View, Text } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Icon,
  Divider,
  BottomNavigation,
  BottomNavigationTab,
} from '@ui-kitten/components';

import { ROUTER } from '@constants/router';

import Footer from '@components/Footer/Footer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { selectUnreadNotification } from '@containers/Notification/saga/selectors';
import { HomeScreen } from '@containers/HomeScreen';
import { ResourcesScreen } from '@containers/ResourcesScreen';
import { PostsScreen } from '@containers/PostsScreen';
import MenuScreen from '@containers/MenuScreen';
import { Field } from '@containers/AllField';
import { PostDetail } from '@containers/PostsScreen/PostDetail';
import { ContactScreen } from '@containers/ContactScreen';
import { ResourcesDetail } from '@containers/ResourcesScreen/ResourcesDetail';
import { ResourcesList } from '@containers/ResourcesScreen/ResourcesList';
import { DataDetail } from '@containers/ResourcesScreen/DataDetail';
import { LanguageScreen } from '@containers/ChangeLanguage';
import UserInfo from '@containers/UserInfo';
import ChangeOldPassword from '@containers/Auth/ChangePassword/changePassword';
import { GuideScreen } from '@containers/GuideScreen';
import { PostByCategory } from '@containers/PostsScreen/PostByCategory';

// import { TYPE_USER } from '@constants/app';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const MainTabBar = () => {
  // const PERMISSIONS = useUserPermissions();

  return (
    <BottomTab.Navigator tabBar={BottomTabBar}>
      <BottomTab.Screen
        name={ROUTER.HOME}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: (iconProps) => (
            <Icon
              {...iconProps}
              pack="app"
              name="home"
              width={16}
              height={16}
            />
          ),
        }}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name={ROUTER.RESOURCES}
        options={{
          tabBarLabel: 'Tài nguyên',
          tabBarIcon: (iconProps) => (
            <Icon
              {...iconProps}
              pack="app"
              name="database"
              width={18}
              height={18}
            />
          ),
        }}
        component={ResourcesScreen}
      />
      <BottomTab.Screen
        name={ROUTER.POSTS}
        options={{
          tabBarLabel: 'Bài viết',
          tabBarIcon: (iconProps) => (
            <Icon
              {...iconProps}
              pack="app"
              name="news"
              width={18}
              height={18}
            />
          ),
        }}
        component={PostsScreen}
      />
      <BottomTab.Screen
        name={ROUTER.MENU}
        options={{
          tabBarLabel: 'Thêm',
          tabBarIcon: (iconProps) => (
            <Icon
              {...iconProps}
              pack="app"
              name="bars"
              width={16}
              height={16}
            />
          ),
        }}
        component={MenuScreen}
      />
    </BottomTab.Navigator>
  );
};

const BottomTabBar = (props) => {
  const { state, navigation, descriptors } = props;

  const onTabSelect = (tabIndex) => {
    const tabSelected = state.routeNames[tabIndex];
    navigation.navigate(tabSelected);
  };

  const renderTab = (route) => {
    const { options } = descriptors[route.key];

    return (
      <BottomNavigationTab
        key={route.key}
        icon={options.tabBarIcon}
        title={options.tabBarLabel}
      />
    );
  };

  return (
    <Footer>
      <Divider />
      <BottomNavigation
        indicatorStyle={{ height: 1 }}
        selectedIndex={state.index}
        onSelect={onTabSelect}
      >
        {state.routes.map(renderTab)}
      </BottomNavigation>
    </Footer>
  );
};

export default function MainNavigator() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name={ROUTER.MAIN} component={MainTabBar} />
      <Stack.Screen name={ROUTER.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTER.FIELD} component={Field} />
      <Stack.Screen name={ROUTER.POSTS_BY_CATEGORY} component={PostByCategory} />
      <Stack.Screen name={ROUTER.POST} component={PostDetail} />
      <Stack.Screen name={ROUTER.CONTACT} component={ContactScreen} />
      <Stack.Screen name={ROUTER.RESOURCES_DETAIL} component={ResourcesDetail} />
      <Stack.Screen name={ROUTER.RESOURCES_LIST} component={ResourcesList} />
      <Stack.Screen name={ROUTER.DATA_DETAIL} component={DataDetail} />
      <Stack.Screen name={ROUTER.CHANGE_LAUGUAGE} component={LanguageScreen} />
      <Stack.Screen name={ROUTER.USER_INFO} component={UserInfo} />
      <Stack.Screen name={ROUTER.CHANGE_OLD_PASSWORD} component={ChangeOldPassword} />
      <Stack.Screen name={ROUTER.GUIDE} component={GuideScreen} /> 
    </Stack.Navigator>
  );
}
