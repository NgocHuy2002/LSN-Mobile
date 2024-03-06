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

export default function ChangePasswordScreen({ navigation, route }) {
    const { registerBy, values } = route.params;

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [checked, setChecked] = React.useState(false);
    const [error, setError] = React.useState(false);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    const formValues = {
        [registerBy === 'phone' ? 'phone' : 'email']: values?.email || values?.phone,
        new_password: '',
        re_new_password: '',
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
        phone: noSpacesValidation,
        new_password: noSpacesValidation,
        re_new_password: noSpacesValidation
            .oneOf([Yup.ref('new_password'), null], 'Mật khẩu nhập lại không khớp'),
    });


    const renderForm = (formik) => (
        <Column space={4} style={tw.p4}>
            <Text style={[tw.mB4, tw.textBase, { color: '#92969A', alignSelf: 'center' }]}>
                Số điện thoại/Email này sẽ được mặc định là tên đăng nhập nếu bạn không cài đặt tài khoản
            </Text>
            <Column space={4}>
                <FormikInput
                    name={registerBy == 'phone' ? "phone" : 'email'}
                    variant="outlined"
                    required={true}
                    placeholder={registerBy == 'phone' ? "Số điện thoại" : 'Email'}
                />
                <FormikInput
                    name="new_password"
                    variant="outlined"
                    password={true}
                    accessoryRight={renderIcon}
                    secureTextEntry={secureTextEntry}
                    placeholder="Nhập mật khẩu mới của bạn"
                />
                <FormikInput
                    name="re_new_password"
                    variant="outlined"
                    password={true}
                    accessoryRight={renderIcon}
                    secureTextEntry={secureTextEntry}
                    placeholder="Nhập lại mật khẩu mới của bạn"
                />
                <View style={[tw.flexCol]}>
                    <View style={{ alignItems: 'center' }}>
                        <Button onPress={formik.handleSubmit} style={{ borderRadius: 100, width: 343, height: 51, position: 'absolute' }}>Tiếp theo</Button>
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
        console.log(values);
    };
    return (
        <Container>
            <Header
                status='primary'
                title="Chào mừng bạn"
                hideLeftIcon={false}
            />
            <Content scrollEnabled={false} safeAreaEnabled={false}>
                <Formik
                    initialValues={formValues}
                    onSubmit={onFormSubmit}
                    validationSchema={Schema}
                >
                    {renderForm}
                </Formik>
            </Content>
        </Container>
    )
}
