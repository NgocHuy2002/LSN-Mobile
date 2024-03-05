import React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as ROUTES from '../../constants/router.js';

import LoginScreen from '../Auth/Login/index.js';
import { HomeScreen } from '../HomeScreen/index.js';
import { MapScreen } from '../MapScreen/index.js';
// import RegisterScreen from '@containers/Auth/Register/RegisterScreen';
// import ForgetPasswordScreen from '@containers/Auth/ForgetPassword/ForgetPasswordScreen';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const MainTabBar = () => {
    <BottomTab.Navigator>
        <BottomTab.Screen
            name={ROUTES.HOME}
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
            name={ROUTES.TAI_NGUYEN}
            options={{
                tabBarLabel: 'Tài nguyên',
                tabBarIcon: (iconProps) => (
                    <Icon
                        {...iconProps}
                        pack="app"
                        name="manage"
                        width={16}
                        height={16}
                    />
                ),
            }}
            component={MapScreen}
        />
    </BottomTab.Navigator>
}

export default function AuthNavigator() {
    return (
        <Stack.Navigator
            // headerMode="none"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen name={ROUTES.MAIN} component={MainTabBar} />
            {/* <Stack.Screen name={ROUTES.REGISTER}
            //   component={RegisterScreen} 
            /> */}
            {/* <Stack.Screen name={ROUTES.FORGET_PASSWORD}
            //   component={ForgetPasswordScreen}
            /> */}
        </Stack.Navigator>
    );
}
