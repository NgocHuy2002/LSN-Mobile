import Container from "@components/Container/Container"
import Header from "@components/Header/Header"
import Content from '@components/Content/Content';
import React from "react"
import { Formik } from "formik";
import * as Yup from 'yup';
import FormikInput from "@components/FormInput/FormikInput";
import { Button, Icon, Text } from "@ui-kitten/components";
import { tw } from "react-native-tailwindcss";
import { View } from "react-native";
import { Column, Row } from "@components/Stack";
import moment from "moment";

export const ContactScreen = () => {
  const formValues = {
    comment: '',
  };
  const noSpacesValidation = Yup.string()
    .required('Thông tin này không được bỏ trống')
    .test('no-spaces', 'Không được chỉ nhập khoảng trắng', (value) => {
      return value !== null && value !== undefined && value.trim() !== '';
    });

  const Schema = Yup.object().shape({
    comment: noSpacesValidation,
  });

  const comments = [
    { comment: 'Cựu tổng thống Donald Trump đang dẫn đầu đường đua tranh đề cử của đảng Cộng hòa với hai chiến thắng đầu tiên trong vòng sơ bộ ở bang Iowa và New Hampshire. Cựu thống đốc Nam Carolina Nikki Haley được đánh giá khó có khả năng chiến thắng, khi tầm ảnh hưởng của ông Trump trong đảng Cộng hòa còn quá lớn.', date: '', key: 2, status: 1 },
    { comment: 'Cựu tổng thống Donald Trump đang dẫn đầu đường đua tranh đề cử của đảng Cộng hòa với hai chiến thắng đầu tiên trong vòng sơ bộ ở bang Iowa và New Hampshire. Cựu thống đốc Nam Carolina Nikki Haley được đánh giá khó có khả năng chiến thắng, khi tầm ảnh hưởng của ông Trump trong đảng Cộng hòa còn quá lớn.', date: '', key: 3, status: 0 },
    { comment: 'Cựu tổng thống Donald Trump đang dẫn đầu đường đua tranh đề cử của đảng Cộng hòa với hai chiến thắng đầu tiên trong vòng sơ bộ ở bang Iowa và New Hampshire. Cựu thống đốc Nam Carolina Nikki Haley được đánh giá khó có khả năng chiến thắng, khi tầm ảnh hưởng của ông Trump trong đảng Cộng hòa còn quá lớn.', date: '', key: 4, status: 1 },
    { comment: 'Cựu tổng thống Donald Trump đang dẫn đầu đường đua tranh đề cử của đảng Cộng hòa với hai chiến thắng đầu tiên trong vòng sơ bộ ở bang Iowa và New Hampshire. Cựu thống đốc Nam Carolina Nikki Haley được đánh giá khó có khả năng chiến thắng, khi tầm ảnh hưởng của ông Trump trong đảng Cộng hòa còn quá lớn.', date: '', key: 5, status: 1 },
  ]

  // ----------------- render ----------------------
  const renderForm = (formik) => (
    <View style={{ padding: 10 }}>
      <FormikInput
        name="comment"
        variant="outlined"
        size='large'
        containerStyle={tw.mB4}
        textStyle={{ height: 106 }}
        multiline={true}
        numberOfLines={5}
        onSubmitEditing={formik.handleSubmit}
        placeholder="Chia sẻ ý kiến của bạn"
      />
      <Button onPress={formik.handleSubmit} accessoryLeft={<Icon name={'paper-plane-outline'} />} style={{ width: 100, alignSelf: 'center' }} size="tiny">Gửi</Button>
    </View>
  )
  const Item = ({ items }) => (
    <Column space={2} style={[tw.mB4]}>
      <Row space={4} style={{ alignItems: 'center' }}>
        <Icon name={'calendar-outline'} width={12} height={12}/>
        <Text style={{fontSize: 10, textAlign: 'center'}}>{moment().format('DD/MM/yyyy')}</Text>
        <View style={{ width: 64, height: 16, borderRadius: 5, backgroundColor: items.status == 1 ? '#38A938' : '#DD4066' }}>
          <Text style={{fontSize: 10, textAlign: 'center', color: '#FFFFFF'}}>{items.status == 1 ? 'Đã duyệt' : 'Chưa duyệt'}</Text>
        </View>
      </Row>
      <Text style={{ textAlign: 'justify' }}>
        {items.comment}
      </Text>
    </Column>
  )
  // ------------------------------------
  // ----------- Action ------------------
  const onFormSubmit = (value) => {
    console.log(value);
  }
  // ------------------------------------
  return (
    <Container>
      <Header
        style={{ backgroundColor: '#286FC3' }}
        color='#FFFFFF'
        status='primary'
        title='Liên hệ'
        hideLeftIcon={false}
      />
      <Content>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#2C384A', padding: 10 }}>Nội dung thông tin cần liên hệ</Text>
        <Formik
          initialValues={formValues}
          onSubmit={onFormSubmit}
          validationSchema={Schema}
        >
          {renderForm}
        </Formik>
        <View style={{ padding: 10 }}>
          <Text style={[tw.mB2]}>{`Liên hệ đã gửi ( ${comments.length} )`}</Text>
          {comments.map((comment) => (
            <Item items={comment} key={comment.key} />
          ))}
        </View>
      </Content>
    </Container>
  )
}