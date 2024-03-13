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
import MenuScreen from "@containers/MenuScreen";
import { BottomNavigationCustom } from "@components/BottomTabs";
import { useDispatch } from "react-redux";
import AppLoaderScreen from "./appLoaderScreen";
import AuthNavigator from "./authNavigation";
import MainNavigator from "./mainNavigation";
import ChangeOldPassword from "@containers/Auth/ChangePassword/changePassword";
import UserInfo from "@containers/UserInfo";
import { LanguageScreen } from "@containers/ChangeLanguage";
import { Field } from "@containers/AllField";
import { GuideScreen } from "@containers/GuideScreen";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={router.LOGIN}>
            {/* <Stack.Screen name={router.APP_LOADER} component={AppLoaderScreen} /> */}
            {/* <Stack.Screen name={router.AUTH_NAVIGATOR} component={AuthNavigator} /> */}
            <Stack.Screen name={router.MAIN_NAVIGATOR} component={MainNavigator} />
            <Stack.Screen name={router.LOGIN} component={LoginScreen} />
            <Stack.Screen name={router.HOME} component={HomeScreen} />
            {/* <Stack.Screen name={router.FIELD} component={Field} /> */}
            <Stack.Screen name={router.REGISTER} component={RegisterScreen} />
            <Stack.Screen name={router.REGISTER_BY} component={RegisterBy} />
            <Stack.Screen name={router.OTP} component={OTPScreen} />
            <Stack.Screen name={router.MENU} component={MenuScreen} />
            <Stack.Screen name={router.CHANGE_PASSWORD} component={ChangePasswordForNew} />
            <Stack.Screen name={router.CHANGE_OLD_PASSWORD} component={ChangeOldPassword} />
            <Stack.Screen name={router.ACCOUNT_INFO} component={AccountInfo} />
            <Stack.Screen name={router.USER_INFO} component={UserInfo} />
            <Stack.Screen name={router.CHANGE_LAUGUAGE} component={LanguageScreen} />
            <Stack.Screen name={router.SUCCESS} component={SuccessScreen} />
            <Stack.Screen name={router.FORGET_PASSWORD} component={ForgetScreen} />
            <Stack.Screen name={router.GUIDE} component={GuideScreen} />
            {/* <Stack.Screen name="Map" component={MapScreen} />  */}
            {/* <Stack.Screen name="Settings" component={Setting} /> */}
        </Stack.Navigator>
    );
}
export default MyStack