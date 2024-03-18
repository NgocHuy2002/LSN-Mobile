import { Button, CheckBox, Icon, Input, Text } from "@ui-kitten/components";
import { SafeAreaView, TouchableWithoutFeedback, View } from "react-native";
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
import { ROUTER } from "@constants/router";
import UserIcon from '@assets/icons/user-edit.svg'
import FormikSelect from "@components/FormSelect/FormikSelect";
import FormikDatePicker from "@components/FormDatePicker/FormikDatePicker";
import { WarningModal } from "@components/WarningModal";
import { updateUserInfoApi } from "@services/UserServive/UserService";

export default function UserInfo({ navigation, route }) {

    const [error, setError] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    const formValues = {
        fullName: '',
        userName: '',
        phone: '',
        email: '',
        sex: '',
        dateOfBirth: '',
        address: '',
    };

    const noSpacesValidation = Yup.string()
        .required('Thông tin này không được bỏ trống')
        .test('no-spaces', 'Không được chỉ nhập khoảng trắng', (value) => {
            return value !== null && value !== undefined && value.trim() !== '';
        });

    const Schema = Yup.object().shape({
        fullName: noSpacesValidation,
        userName: noSpacesValidation,
        phone: noSpacesValidation,
        email: noSpacesValidation,
        sex: noSpacesValidation,
        dateOfBirth: noSpacesValidation,
        address: noSpacesValidation,
    });


    const renderForm = (formik) => (
        <Column space={4} style={[tw.p4, { flex: 1 }]}>
            <Text style={[tw.mB4, tw.textBase, { color: '#92969A', alignSelf: 'center' }]}>
                Vui lòng nhập thông tin tài khoản
            </Text>
            <UserIcon style={{ alignSelf: 'center' }} />
            <Column space={4} style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>
                    <FormikInput
                        name={'fullName'}
                        variant="outlined"
                        containerStyle={tw.mB4}
                        // required={true}
                        placeholder={'Họ và tên'}
                    />
                    <FormikInput
                        name={'userName'}
                        variant="outlined"
                        containerStyle={tw.mB4}
                        required={true}
                        placeholder={'Tên đăng nhập'}
                    />
                    <FormikInput
                        name={'phone'}
                        variant="outlined"
                        containerStyle={tw.mB4}
                        // required={true}
                        placeholder={'Số điện thoại'}
                    />
                    <FormikInput
                        name={'email'}
                        variant="outlined"
                        containerStyle={tw.mB4}
                        // required={true}
                        placeholder={'Email'}
                    />
                    <FormikSelect
                        name="sex"
                        variant='outlined'
                        containerStyle={tw.mB4}
                        // required={true}
                        uniqueKey="value"
                        displayKey="label"
                        options={[
                            { value: 0, label: 'Nam' },
                            { value: 1, label: 'Nữ' },
                        ]}
                        placeholder={'Nhập giới tính'}
                    />
                    <FormikDatePicker
                        name="dateOfBirth"
                        containerStyle={tw.mB4}
                        variant="outlined"
                        placeholder="Chọn ngày sinh"
                    />
                    <FormikInput
                        name="address"
                        variant="outlined"
                        containerStyle={tw.mB4}
                        placeholder="Địa chỉ"
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Button onPress={formik.handleSubmit} style={{ borderRadius: 100, width: 343, height: 51 }}>Lưu thông tin</Button>
                    <Button onPress={() => setVisible(true)} appearance="ghost" status="danger">Xoá tài khoản</Button>
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
        const dataForm = {
            // userName: values.userName,
            sex: values.sex,
            "fullName": values.fullName,
            "dateOfBirth": values.dateOfBirth,
            "address": values.address
        }
        const data = await updateUserInfoApi(dataForm)
        // navigation.navigate(ROUTER.SUCCESS, { content: 'Tài khoản đã được tạo thành công' })
        // console.log(values);
        console.log(data);
    };
    return (
        <Container>
            <Header
                // status='primary'
                title="Thông tin tài khoản"
                color={'#286FC3'}
                hideLeftIcon={false}
            />
            <Content scrollEnabled={true} safeAreaEnabled={true}>
                <Formik
                    initialValues={formValues}
                    onSubmit={onFormSubmit}
                    // validationSchema={Schema}
                >
                    {renderForm}
                </Formik>
            </Content>
            <WarningModal
                visible={visible}
                onRequestClose={() => setVisible(false)}
                status={'danger'}
                title={'Bạn có chắc chắn muốn xoá bài viết'}
                content={'Tên bài viết'}
            />
        </Container>
    )
}
