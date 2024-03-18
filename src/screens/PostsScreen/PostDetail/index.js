import Container from '@components/Container/Container';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, TouchableWithoutFeedback, View, useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import Content from '@components/Content/Content';
import Header from '@components/Header/Header';
import { Avatar, Button, Icon, Input, Text } from '@ui-kitten/components';
import { Column, Row } from '@components/Stack';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import { ImageWithDescription } from '@components/ImageWithDescription/ImageWithDescription';
import { Formik } from 'formik';
import FormikInput from '@components/FormInput/FormikInput';
import { tw } from 'react-native-tailwindcss';
import * as Yup from 'yup';
import { getBaiVietTheoIdApi } from '@services/PostsService/PostsService';
import { WebView } from 'react-native-webview';
import Loading from '@components/Loading/Loading';

const title = 'Thủ tướng Phạm Minh Chính: Nỗ lực của ngành TN&MT giúp giải phóng, phát huy các nguồn lực tài nguyên cho phát triển kinh tế, xã hội'
const author = 'Trần Đức Hiếu'
const comments = [
  { name: 'Trần Đức Hiếu', comment: 'Bài viết rất hữu ích.. like like', date: '', key: 1 },
  { name: 'Trần Đức Hiếu', comment: 'Bài viết rất hữu ích.. like like', date: '', key: 2 },
  { name: 'Trần Đức Hiếu', comment: 'Bài viết rất hữu ích.. like like', date: '', key: 3 },
  { name: 'Trần Đức Hiếu', comment: 'Bài viết rất hữu ích.. like like', date: '', key: 4 },
  { name: 'Trần Đức Hiếu', comment: 'Bài viết rất hữu ích.. like like', date: '', key: 5 },
]

export const PostDetail = ({ navigation, route }) => {
  const { id } = route.params;
  const { width } = useWindowDimensions();
  const [source, setSource] = useState()
  const formValues = {
    comment: '',
  };
  // const source = {
  //   html: content
  // };
  const noSpacesValidation = Yup.string()
    .required('Thông tin này không được bỏ trống')
    .test('no-spaces', 'Không được chỉ nhập khoảng trắng', (value) => {
      return value !== null && value !== undefined && value.trim() !== '';
    });

  const Schema = Yup.object().shape({
    comment: noSpacesValidation,
  });
  // ---------- Render ----------------
  const RenderIcon = (props) => {
    return (
      <TouchableWithoutFeedback onPress={props?.formik}>
        <Icon
          {...props}
          name={'corner-down-left-outline'}
        />
      </TouchableWithoutFeedback>
    )
  };
  const AvatarImageComponentShowcase = () => (
    <Avatar
      source={require('@assets/images/logo.png')}
      ImageComponent={ImageBackground}
    />
  );
  const Item = ({ items }) => (
    <Row space={4} style={{ justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
      <Row style={{ alignItems: 'center', gap: 10 }}>
        <Avatar
          source={require('@assets/images/logo.png')}
          ImageComponent={ImageBackground}
          size='small'
        />
        <Column style={{ alignItems: 'left' }}>
          <Text style={{ fontSize: 12, color: '#2C384A', fontWeight: 'bold' }}>
            {items.name}
          </Text>
          <Text style={{ fontSize: 12, color: '#2C384A', fontWeight: '400' }}>
            {items.comment}
          </Text>
        </Column>
      </Row>
      <Text style={{ fontSize: 12, color: '#2C384A', fontWeight: '400' }}>{moment().format('DD/MM/yyyy')}</Text>
    </Row>
  )
  const renderForm = (formik) => (
    <FormikInput
      name="comment"
      variant="outlined"
      size='large'
      containerStyle={tw.mB4}
      onSubmitEditing={formik.handleSubmit}
      accessoryRight={<RenderIcon formik={formik.handleSubmit} />}
      placeholder="Chia sẻ ý kiến của bạn"
    />
  )
  // --------------- useEffect --------------------
  useEffect(() => {
    handleGetBaiViet()
  }, [])
  // ----------------------------------------------
  const handleGetBaiViet = async () => {
    const data = await getBaiVietTheoIdApi(id)
    // console.log(data.noidung);
    setSource({ html: data.noidung })
  }
  // --------------- Action -----------------------
  const onFormSubmit = (values) => {
    console.log(values);
  }
  // ----------------------------------------------
  return (
    <Container>
      <Header
        style={{ backgroundColor: '#286FC3' }}
        color='#FFFFFF'
        status='primary'
        title='Bài viết'
        hideLeftIcon={false}
      />
      {/* <View style={{ height: 500, width: Dimensions.get('screen').width,backgroundColor: "#EEF2FA", }}>
        <WebView
          originWhitelist={['*']}
          scalesPageToFit={true}
          bounces={false}
          scrollEnabled
          source={source ? source : { html: `<p></p>` }}
          automaticallyAdjustContentInsets={false}
          containerStyle={{ flex: 1, backgroundColor: '#EEF2FA' }}
          renderLoading={() => (
              <View style={[tw.flex1]}>
                  <Loading />
              </View>
          )}
          javaScriptEnabled={true}
          startInLoadingState={true}
        />
      </View> */}
      <Content scrollEnabled={true} safeAreaEnabled={true}>
        <Column space={4} style={{ paddingBottom: 25, paddingHorizontal: 10 }}>
          <RenderHtml
            contentWidth={width}
            source={source ? source : { html: `<p></p>` }}
          />
        </Column>
        {/* Comment */}
        <Column style={{ width: '100%', padding: 10 }} space={2}>
          <Text>{`Bình luận ( ${comments.length} )`}</Text>
          <Formik
            initialValues={formValues}
            onSubmit={onFormSubmit}
            validationSchema={Schema}
          >
            {renderForm}
          </Formik>
          {comments.map((comment) => (
            <Item items={comment} key={comment.key} />
          ))}
        </Column>
      </Content>
    </Container>
  );
}