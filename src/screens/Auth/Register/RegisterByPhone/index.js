import Container from "@components/Container/Container";
import Content from "@components/Content/Content";
import FormikInput from "@components/FormInput/FormikInput";
import FormikSelect from "@components/FormSelect/FormikSelect";
import Header from "@components/Header/Header";
import { Column, Row } from "@components/Stack";
import { router } from "@constants/router";
import { Button, Text } from "@ui-kitten/components";
import { Formik } from "formik";
import React, { useState } from "react";
import { tw } from "react-native-tailwindcss";
import * as Yup from 'yup';

export const RegisterBy = ({ route, navigation }) => {

    const { registerBy } = route.params;

    const [selectedIndex, setSelectedIndex] = useState('+84')

    const phoneValues = {
        country: '',
        phone: ''
    };
    const emailValues = {
        email: '',
    };
    const countryData = [
        { key: 'vn', icon: 'sun-outline', numb: '+84' },
        { key: 'cn', icon: 'radio-button-off-outline', numb: '+86' },
        { key: 'us', icon: 'star-outline', numb: '+1' },
    ]

    const noSpacesValidation = Yup.string()
        .required('Thông tin này không được bỏ trống')
        .test('no-spaces', 'Không được chỉ nhập khoảng trắng', (value) => {
            return value !== null && value !== undefined && value.trim() !== '';
        });

    const phoneSchema = Yup.object().shape({
        country: noSpacesValidation,
        phone: Yup.number('Phải là số ').required('Thông tin này không được bỏ trống'),
    });
    const emailSchema = Yup.object().shape({
        email: Yup.string().email('Không đúng định dạng email').test('no-spaces', 'Không được chỉ nhập khoảng trắng', (value) => {
            return value !== null && value !== undefined && value.trim() !== '';
        }),
    });

    const renderForm = (formik) => {
        return (
            <Column style={[tw.p4]}>
                <Text style={[tw.mB4, tw.textBase, { color: '#92969A' }]}>
                    {registerBy == 'phone' ? 'Mã xác minh sẽ được gửi đến số điện thoại của bạn' :
                        'Mã xác minh sẽ được gửi đến email của bạn'
                    }
                </Text>
                {registerBy == 'phone' ?
                    <Row space={2}>
                        <FormikSelect
                            name="country"
                            variant="outlined"
                            uniqueKey="key"
                            displayKey="numb"
                            options={countryData}
                            selectedIndex={selectedIndex}
                            containerStyle={tw.w32}
                        />
                        <FormikInput
                            name="phone"
                            variant="outlined"
                            required={true}
                            placeholder="Nhập số điện thoại của bạn"
                            containerStyle={tw.w56}
                        />
                    </Row> :
                    <Row>
                        <FormikInput
                            name="email"
                            variant="outlined"
                            required={true}
                            placeholder="Nhập email của bạn"
                            containerStyle={{ width: '100%' }}
                        />
                    </Row>
                }
                <Button onPress={formik.handleSubmit} style={[{ borderRadius: 100, width: 343, height: 51, top: '160%', alignSelf: 'center' }]}><Text>Gửi mã xác thực OTP</Text></Button>
            </Column>
        )
    }

    // ---------- Action ------------
    const onFormSubmit = async (values) => {
        navigation.navigate(router.OTP, {registerBy: registerBy, values: values})
        console.log(values);
    };
    return (
        <Container>
            <Header
                status='primary'
                title={registerBy == 'phone' ? "Nhập số điện thoại" : 'Nhập email'}
                hideLeftIcon={false}
            />
            <Content scrollEnabled={false} safeAreaEnabled={false} keyboardEnabled={true}>
                <Formik
                    initialValues={registerBy == 'phone' ? phoneValues : emailValues}
                    onSubmit={onFormSubmit}
                    validationSchema={registerBy == 'phone' ? phoneSchema : emailSchema}
                >
                    {renderForm}
                </Formik>
            </Content>
        </Container>
    )
}