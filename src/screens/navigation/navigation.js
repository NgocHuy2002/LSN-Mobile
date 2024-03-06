const { createStackNavigator } = require("@react-navigation/stack");
import React from "react";
import LoginScreen from "../Auth/Login";
import { HomeScreen } from "../HomeScreen";
import { MapScreen } from "../MapScreen";
import RegisterScreen from "@containers/Auth/Register/RegisterScreen";
import { RegisterBy } from "@containers/Auth/Register/RegisterByPhone";
import { router } from "@constants/router";
import { OTPScreen } from "@containers/Auth/OTPScreen";
import ChangePasswordScreen from "@containers/Auth/ChangePassword";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName={router.LOGIN}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={router.LOGIN} component={LoginScreen} />
            <Stack.Screen name={router.REGISTER} component={RegisterScreen} />
            <Stack.Screen name={router.REGISTER_BY_PHONE} component={RegisterBy} />
            <Stack.Screen name={router.OTP} component={OTPScreen} />
            <Stack.Screen name={router.CHANGE_PASSWORD} component={ChangePasswordScreen} />
            <Stack.Screen name={router.HOME} component={HomeScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
        </Stack.Navigator>
    );
}
export default MyStack