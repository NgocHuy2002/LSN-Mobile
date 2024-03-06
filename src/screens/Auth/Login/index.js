import { Button, CheckBox, Icon, Input, Text } from "@ui-kitten/components";
import { SafeAreaView, TouchableWithoutFeedback, View } from "react-native";
import TopNavigationCustom from "../../../components/TopNavigation";
import React from "react";
import { CustomForm } from "@components/Form/form";
import * as Yup from 'yup';
import { Formik } from "formik";
import Container from "@components/Container/Container";
import Header from "@components/Header/Header";
import Content from '@components/Content/Content';
import { tw } from 'react-native-tailwindcss';
import { Column } from "@components/Stack";
import FormikInput from "@components/FormInput/FormikInput";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "@constants/router";

export default function LoginScreen({ navigation }) {

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [checked, setChecked] = React.useState(false);
    const [error, setError] = React.useState(false);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const formValues = {
        username: '',
        password: ''
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon
                {...props}
                name={secureTextEntry ? 'eye-off' : 'eye'}
            />
        </TouchableWithoutFeedback>
    );

    const noSpacesValidation = Yup.string()
        .required('Thông tin này không được bỏ trống')
        .test('no-spaces', 'Không được chỉ nhập khoảng trắng', (value) => {
            return value !== null && value !== undefined && value.trim() !== '';
        });

    const Schema = Yup.object().shape({
        username: noSpacesValidation,
        password: noSpacesValidation,
    });

    const renderForm = (formik) => (
        <Column space={4} style={tw.p4}>
            <Column space={2}>
                <FormikInput
                    name="username"
                    variant="outlined"
                    required={true}
                    placeholder="Tên đăng nhập"
                />
                <FormikInput
                    name="password"
                    variant="outlined"
                    password={true}
                    accessoryRight={renderIcon}
                    secureTextEntry={secureTextEntry}
                    placeholder="Nhập mật khẩu"
                />
                {error ? <Text style={{ fontSize: 12, color: 'red' }}>Tên đăng nhập hoặc mật khẩu không đúng</Text> : null}
                <View style={[tw.flexCol]}>
                    <View>
                        <CustomForm
                            type={'checkBox'}
                            style={{ marginBottom: 15 }}
                            checked={checked}
                            onChange={nextChecked => setChecked(nextChecked)}
                            label={'Ghi nhớ tài khoản'}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button onPress={() => console.log('Forgot')} appearance="ghost">Quên mật khẩu ?</Button>
                        <Button onPress={formik.handleSubmit} style={{ borderRadius: 100, width: 343, height: 51 }}>Đăng nhập</Button>
                        <Button onPress={() => navigation.navigate(router.REGISTER)} appearance="ghost">Đăng ký tài khoản</Button>
                    </View>
                </View>
            </Column>
        </Column>
    )


    // ---------- useEffect ------------
    useFocusEffect(
        React.useCallback(() => {
            setError(false)
        }, [])
    )
    // ---------- Action ------------
    const onFormSubmit = async (values) => {
        if (values.password == 'a' && values.username == 'a') {
            navigation.navigate(router.HOME)
        }
        else {
            setError(true)
        }
    };
    return (
        <Container>
            <Header
                status='primary'
                title="Đăng nhập"
                hideLeftIcon={true}
            />
            <Content scrollEnabled={false} safeAreaEnabled={false}>
                <Formik
                    initialValues={formValues}
                    onSubmit={onFormSubmit}
                // validationSchema={Schema}
                >
                    {renderForm}
                </Formik>
            </Content>
        </Container>
    )
}