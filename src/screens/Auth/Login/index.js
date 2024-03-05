import { Button, CheckBox, Icon, Input, Text } from "@ui-kitten/components";
import { SafeAreaView, TouchableWithoutFeedback, View } from "react-native";
import TopNavigationCustom from "../../../components/TopNavigation";
import React from "react";
import { CustomForm } from "../../../components/Form/form";
import { Formik } from "formik";

export default function LoginScreen() {

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [checked, setChecked] = React.useState(false);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon
                {...props}
                name={secureTextEntry ? 'eye-off' : 'eye'}
            />
        </TouchableWithoutFeedback>
    );
    return (
        <View style={{ flex: 1 }}>
            <TopNavigationCustom title={'Đăng nhập'} isReturnable={false} />
            {/* <View style={{display: 'flex', justifyContent:'center', alignItems: 'center', marginBottom: 15}}>
                <Text style={{ fontSize: 20 }}>Đăng nhập</Text>
            </View> */}
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={{ display: 'flex', paddingHorizontal: 40 }}>
                        <CustomForm
                            type={'text'}
                            placeholder='Tên đăng nhập'
                            style={{ marginBottom: 15 }}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                        />

                        <CustomForm
                            type={'pass'}
                            placeholder='Mật khẩu'
                            style={{ marginBottom: 15 }}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            accessoryRight={renderIcon}
                            secureTextEntry={secureTextEntry} />
                        <CustomForm
                            type={'checkBox'}
                            style={{ marginBottom: 15 }}
                            checked={checked}
                            onChange={nextChecked => setChecked(nextChecked)}
                            label={'Ghi nhớ tài khoản'}
                        >
                            {/* <Text>Ghi nhớ tài khoản</Text> */}
                        </CustomForm>
                        <Button size="small" onPress={handleSubmit} appearance="ghost"><Text>Đăng ký tài khoản</Text></Button>
                        <Button size="small" onPress={handleSubmit} style={{borderRadius: 100}}><Text>Đăng nhập</Text></Button>
                        <Button size="small" onPress={handleSubmit} appearance="ghost"><Text>Quên mật khẩu ?</Text></Button>
                    </View>
                )}
            </Formik>
        </View>
    )
}
