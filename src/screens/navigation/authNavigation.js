import React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import * as ROUTES from '../../constants/router.js';

import LoginScreen from '../Auth/Login/index.js';
// import RegisterScreen from '@containers/Auth/Register/RegisterScreen';
// import ForgetPasswordScreen from '@containers/Auth/ForgetPassword/ForgetPasswordScreen';

const Stack = createStackNavigator();

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
            <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
            <Stack.Screen name={ROUTES.REGISTER}
            //   component={RegisterScreen} 
            />
            <Stack.Screen name={ROUTES.FORGET_PASSWORD}
            //   component={ForgetPasswordScreen}
            />
        </Stack.Navigator>
    );
}
