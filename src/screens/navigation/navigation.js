import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from "react";
import LoginScreen from "../Auth/Login";
import { HomeScreen } from "../HomeScreen";
import { MapScreen } from "../MapScreen";
import RegisterScreen from "@containers/Auth/Register/RegisterScreen";
import { RegisterBy } from "@containers/Auth/Register/RegisterByPhone";
import { ROUTER } from "@constants/router";
import { OTPScreen } from "@containers/Auth/OTPScreen";
import ChangePasswordForNew from "@containers/Auth/ChangePassword";
import AccountInfo from "@containers/Auth/Register/Account_Info";
import { SuccessScreen } from "@containers/SuccessScreen";
import ForgetScreen from "@containers/Auth/ForgetPassword";
import MenuScreen from "@containers/MenuScreen";
import { BottomNavigationCustom } from "@components/BottomTabs";
import { useDispatch, useSelector } from "react-redux";
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTER.APP_LOADER} component={AppLoaderScreen} />
            <Stack.Screen name={ROUTER.AUTH_NAVIGATOR} component={AuthNavigator} />
            <Stack.Screen name={ROUTER.MAIN_NAVIGATOR} component={MainNavigator} />
            {/* <Stack.Screen name={ROUTER.LOGIN} component={LoginScreen} />
            <Stack.Screen name={ROUTER.HOME} component={HomeScreen} /> */}
            {/* <Stack.Screen name={ROUTER.FIELD} component={Field} /> */}
            {/* <Stack.Screen name={ROUTER.REGISTER} component={RegisterScreen} />
            <Stack.Screen name={ROUTER.REGISTER_BY} component={RegisterBy} />
            <Stack.Screen name={ROUTER.OTP} component={OTPScreen} />
            <Stack.Screen name={ROUTER.MENU} component={MenuScreen} />
            <Stack.Screen name={ROUTER.CHANGE_PASSWORD} component={ChangePasswordForNew} />
            <Stack.Screen name={ROUTER.CHANGE_OLD_PASSWORD} component={ChangeOldPassword} />
            <Stack.Screen name={ROUTER.ACCOUNT_INFO} component={AccountInfo} />
            <Stack.Screen name={ROUTER.USER_INFO} component={UserInfo} />
            <Stack.Screen name={ROUTER.CHANGE_LAUGUAGE} component={LanguageScreen} />
            <Stack.Screen name={ROUTER.SUCCESS} component={SuccessScreen} />
            <Stack.Screen name={ROUTER.FORGET_PASSWORD} component={ForgetScreen} />
            <Stack.Screen name={ROUTER.GUIDE} component={GuideScreen} /> */}
            {/* <Stack.Screen name="Map" component={MapScreen} />  */}
            {/* <Stack.Screen name="Settings" component={Setting} /> */}
        </Stack.Navigator>
    );
}
export default MyStack