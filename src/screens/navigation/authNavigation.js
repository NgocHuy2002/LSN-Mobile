import { router } from '@constants/router';
import ChangePasswordForNew from '@containers/Auth/ChangePassword';
import ChangeOldPassword from '@containers/Auth/ChangePassword/changePassword';
import ForgetScreen from '@containers/Auth/ForgetPassword';
import LoginScreen from '@containers/Auth/Login';
import { OTPScreen } from '@containers/Auth/OTPScreen';
import AccountInfo from '@containers/Auth/Register/Account_Info';
import { RegisterBy } from '@containers/Auth/Register/RegisterByPhone';
import RegisterScreen from '@containers/Auth/Register/RegisterScreen';
import { LanguageScreen } from '@containers/ChangeLanguage';
import MenuScreen from '@containers/MenuScreen';
import { SuccessScreen } from '@containers/SuccessScreen';
import UserInfo from '@containers/UserInfo';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name={router.LOGIN} component={LoginScreen} />
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
        </Stack.Navigator>
    )
};
