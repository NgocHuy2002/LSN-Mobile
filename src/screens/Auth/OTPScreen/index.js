import Container from "@components/Container/Container";
import Content from "@components/Content/Content";
import FormikInput from "@components/FormInput/FormikInput";
import FormikSelect from "@components/FormSelect/FormikSelect";
import Header from "@components/Header/Header";
import { Column, Row } from "@components/Stack";
import { router } from "@constants/router";
import { Button, Text } from "@ui-kitten/components";
import { Field, Formik } from "formik";
import React, { useRef, useState } from "react";
import { Dimensions, View } from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import { tw } from "react-native-tailwindcss";
import * as Yup from 'yup';

export const OTPScreen = ({ route, navigation }) => {
    const { registerBy, values, isNew } = route.params;
    let otpInput = useRef(null);
    const [otp, setOtp] = useState('');
    const screenWidth = Dimensions.get('screen').width * 0.9;

    // ---------- Action ------------
    const onFormSubmit = async (value) => {
        navigation.navigate(router.CHANGE_PASSWORD, { registerBy: registerBy, values: values, isNew: isNew })
        console.log(value);
    };
    return (
        <Container>
            <Header
                status='primary'
                title="Nhập mã xác thực"
                hideLeftIcon={false}
            />
            <Content>
                <Column style={[{ flex: 1, justifyContent: 'space-between' }]}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={[tw.mB4, tw.textBase, { color: '#92969A' }]}>
                            Vui lòng nhập mã số gồm 6 chữ số bao gồm:
                        </Text>
                        <OTPTextInput handleTextChange={(e) => setOtp(e)} inputCount={6} inputCellLength={1} textInputStyle={{ borderWidth: 1, borderColor: '#286FC3', borderRadius: 8, width: 40, height: 40 }} containerStyle={{ width: screenWidth }} />
                    </View>
                    <Button onPress={() => onFormSubmit(otp)} style={{ borderRadius: 100, width: 343, height: 51, alignSelf: 'center', marginBottom: '5%' }}><Text>Gửi mã xác thực OTP</Text></Button>
                </Column>
            </Content>
        </Container>
    )
}