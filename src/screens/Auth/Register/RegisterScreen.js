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
import { router } from "@constants/router";

export default function RegisterScreen({ navigation }) {
    const renderIcon = (props) => (
        <Icon
            {...props}
            name={'arrow-forward-outline'}
        />
    );
    return (
        <Container>
            <Header
                status='primary'
                title="Đăng ký"
                hideLeftIcon={false}
            />
            <Content scrollEnabled={false} safeAreaEnabled={false} style={[tw.flexCol, tw.m5]}>
                <View>
                    <Text style={[tw.mB4, tw.textBase, { color: '#92969A' }]}>Vui lòng chọn hình thức đăng ký tài khoản</Text>
                </View>
                <Button style={[tw.roundedFull, tw.mB4]} appearance="outline" accessoryRight={renderIcon} onPress={() => navigation.navigate(router.REGISTER_BY, { registerBy: 'email', isNew: true })}>Đăng ký qua email</Button>
                <Button style={[tw.roundedFull]} appearance="outline" accessoryRight={renderIcon} onPress={() => navigation.navigate(router.REGISTER_BY, { registerBy: 'phone', isNew: true })}>Đăng ký qua số điện thoại</Button>
            </Content>
        </Container>
    )
}
