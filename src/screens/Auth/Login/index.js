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
                {error ? <Text style={{fontSize: 12, color: 'red'}}>Tên đăng nhập hoặc mật khẩu không đúng</Text> : null}
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
                    <View>
                        <Button size="small" onPress={() => console.log('Dang ky')} appearance="ghost"><Text>Đăng ký tài khoản</Text></Button>
                        <Button size="small" onPress={formik.handleSubmit} style={{ borderRadius: 100 }}><Text>Đăng nhập</Text></Button>
                        <Button size="small" onPress={() => console.log('Forgot')} appearance="ghost"><Text>Quên mật khẩu ?</Text></Button>
                    </View>
                </View>
            </Column>
        </Column>
    )

    const onFormSubmit = async (values) => {
        console.log(values);
        if (values.password == 'a' && values.username == 'a') {
            navigation.navigate('Home')
        }
        else{
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
