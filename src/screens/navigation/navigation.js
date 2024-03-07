const { createStackNavigator } = require("@react-navigation/stack");
import React from "react";
import LoginScreen from "../Auth/Login";
import { HomeScreen } from "../HomeScreen";
import { MapScreen } from "../MapScreen";
import RegisterScreen from "@containers/Auth/Register/RegisterScreen";
import { RegisterBy } from "@containers/Auth/Register/RegisterByPhone";
import { router } from "@constants/router";
import { OTPScreen } from "@containers/Auth/OTPScreen";
import ChangePasswordForNew from "@containers/Auth/ChangePassword";
import AccountInfo from "@containers/Auth/Register/Account_Info";
import { SuccessScreen } from "@containers/SuccessScreen";
import ForgetScreen from "@containers/Auth/ForgetPassword";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName={router.HOME}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={router.LOGIN} component={LoginScreen} />
            <Stack.Screen name={router.REGISTER} component={RegisterScreen} />
            <Stack.Screen name={router.REGISTER_BY} component={RegisterBy} />
            <Stack.Screen name={router.OTP} component={OTPScreen} />
            <Stack.Screen name={router.CHANGE_PASSWORD} component={ChangePasswordForNew} />
            <Stack.Screen name={router.ACCOUNT_INFO} component={AccountInfo} />
            <Stack.Screen name={router.SUCCESS} component={SuccessScreen} />
            <Stack.Screen name={router.FORGET_PASSWORD} component={ForgetScreen} />
            <Stack.Screen name={router.HOME} component={HomeScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
        </Stack.Navigator>
    );
}
export default MyStack