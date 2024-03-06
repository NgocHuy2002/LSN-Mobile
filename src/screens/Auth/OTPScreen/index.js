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

export const OTPScreen = ({ route, navigation }) => {
    const { registerBy, values } = route.params;

    const otpValues = Array.from({ length: 6 }, (_, index) => ({
        [`otp_${index}`]: '',
    })).reduce((acc, curr) => ({ ...acc, ...curr }), {});


    const onlyOne = Yup.number()
        .max(1);
    const phoneSchema = Yup.object().shape(
        Array.from({ length: 6 }, (_, index) => ({
            [`otp_${index}`]: onlyOne,
        })).reduce((acc, curr) => ({ ...acc, ...curr }), {})
    );
    const renderForm = (formik) => {
        return (
            <Column style={[tw.p4]}>
                <Text style={[tw.mB4, tw.textBase, { color: '#92969A', alignSelf: 'center' }]}>
                    Vui lòng nhập mã số gồm 6 chữ số bao gồm:
                </Text>
                <Row space={2} style={{ alignSelf: 'center' }}>
                    {Array.from({ length: 6 }, (_, index) => (
                        <FormikInput
                            key={index}
                            name={`OTP_${index}`}
                            variant="outlined"
                            containerStyle={{ width: 50, height: 50 }}
                        />
                    ))}
                </Row>
                <Button onPress={formik.handleSubmit} style={[{ borderRadius: 100, width: 343, height: 51, top: '160%', alignSelf: 'center' }]}><Text>Gửi mã xác thực OTP</Text></Button>
            </Column>
        )
    }

    // ---------- Action ------------
    const onFormSubmit = async (value) => {
        navigation.navigate(router.CHANGE_PASSWORD, {registerBy: registerBy, values: values})
        console.log(value);
    };
    return (
        <Container>
            <Header
                status='primary'
                title="Nhập số điện thoại"
                hideLeftIcon={false}
            />
            <Content>
                <Formik
                    initialValues={otpValues}
                    onSubmit={onFormSubmit}
                    validationSchema={phoneSchema}
                >
                    {renderForm}
                </Formik>
            </Content>
        </Container>
    )
}