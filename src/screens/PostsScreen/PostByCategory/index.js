import Container from "@components/Container/Container";
import React, { useEffect, useMemo, useState } from "react";
import Header from "@components/Header/Header";
import Content from '@components/Content/Content';
import ProList from "@components/ProList/ProList";
import { useIsFocused } from '@react-navigation/native';
import { Dimensions, FlatList, Image, TouchableWithoutFeedback, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { API } from "@constants/api";
import { formatString } from "@helpers/formatString";
import request from '@services/request';
import { getBaiVietTheoChuyenMucApi, getBaiVietTheoChuyenMucIdApi } from "@services/PostsService/PostsService";
import { tw } from "react-native-tailwindcss";
import { ROUTER } from "@constants/router";

export const PostByCategory = ({ navigation, route }) => {
  const { title, chuyen_muc_id } = route.params;
  const isFocused = useIsFocused();
  const screenWidth = Dimensions.get('screen').width * 0.5 - 10
  const numberCol = 2;
  const [data, setData] = useState()

  const truncateString = (str, maxLength) => {
		if (str.length > maxLength) {
			return str.slice(0, maxLength - 3) + '...';
		}
		return str;
	}
  const renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate(ROUTER.POST, { id: item.id })}>
        <View style={{
          borderRadius: 15,
          width: screenWidth,
          height: screenWidth,
          margin: 5
        }}>
          <Image
            // src={item.imageLink}
            source={require('@assets/images/image_demo.png')}
            style={{ width: screenWidth, resizeMode: 'cover' }} />
          <Text style={{ width: screenWidth, height: screenWidth * 0.5, textAlign: 'justify' }}>{truncateString(item.tieude, 85)}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  const formatData = (data, numCol) => {
    const numberOfFullRows = Math.floor(data.lenght / numCol)

    let numberOfElementsLastRow = data.lenght - { numberOfFullRows };

    while (numberOfElementsLastRow != numCol && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }
  }

  const filterParams = useMemo(() => {
    const params = {};
    // if (formValues.name) params['name[like]'] = formValues.name;
    // if (formValues.code) params['code[like]'] = formValues.code;
    // if (formValues.procedure) params.procedure = formValues.procedure;
    return params;
  }, []);
  // ------------------ useEffect ---------------------------
  useEffect(() => {
    handleGetBaiViet()
  }, [])
  // --------------------------------------------------------
  // ------------------ Action ------------------------------
  const handleGetBaiViet = async (page, limit, params) => {
    const data = await getBaiVietTheoChuyenMucIdApi(chuyen_muc_id, page, limit, params);
    if (data) {
      return { data };
    }
    return null;
  }
  // --------------------------------------------------------
  return (
    <Container>
      <Header
        style={{ backgroundColor: '#286FC3' }}
        color='#FFFFFF'
        status='primary'
        title={title}
        hideLeftIcon={false}
      />
      <Content scrollEnabled={false} safeAreaEnabled={false}>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <ProList
            params={filterParams}
            request={handleGetBaiViet}
            reloadDeps={[isFocused]}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={tw.h4} />}
            // contentContainerStyle={tw.p4}
            keyExtractor={item => item.id}
          />
        </View>
      </Content>
    </Container>
  )
}