import Container from "@components/Container/Container";
import Header from "@components/Header/Header";
import Content from '@components/Content/Content';
import React, { useEffect, useState } from "react";
import { Button, Card, Icon, List, ListItem, Text } from "@ui-kitten/components";
import { Column, Row } from "@components/Stack";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from "moment";
import { ROUTER } from "@constants/router";
import { getDoiTuongByKhoIdApi } from "@services/KhoService/KhoService";

export const ResourcesDetail = ({ route, navigation }) => {
  const { title, id } = route.params;
  const [doiTuong, setDoiTuong] = useState()
  const data = [
    {
      title: 'trạm khai thác nước mặt',
      number: 100,
      key: 1,
      tags: ['Bản đồ'],
      seen: 30,
      download: 30,
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`
    },
    {
      title: 'trạm khai thác nước mặt',
      number: 100,
      key: 2,
      seen: 30,
      tags: ['Bản đồ', 'Giá đất'],
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`
    },
    {
      title: 'trạm khai thác nước mặt',
      key: 3,
      number: 100,
      tags: ['Bản đồ', 'Giá đất'],
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`
    },
    {
      title: 'trạm khai thác nước mặt',
      number: 100,
      key: 4,
      download: 30,
      tags: ['Bản đồ', 'Giá đất'],
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`
    },
  ]
  // ----------- Render --------------------
  const ItemAccessory = props => {
    return (
      <Row style={{ alignItems: 'center' }}>
        <View style={{ width: 31, height: 28, backgroundColor: '#ECEFF1', borderRadius: 13, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 12, color: '#286FC3', fontWeight: 'bold' }}>{props.number}</Text>
        </View>
        <Icon name={'arrow-forward-outline'} width={25} height={20} fill={'#286FC3'} />
      </Row>
    );
  };

  const RenderHeader = (props) => {
    return (
      <Row style={{ alignItems: 'center', padding: 5, backgroundColor: '#F7F7F7', borderColor: '#CDD3D9' }} space={4}>
        <AntDesign name="folderopen" size={12} color="#2C384A" />
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{props.title.toUpperCase()}</Text>
      </Row>
    )
  }
  const RenderFooter = (props) => {
    return (
      <Row style={{ alignItems: 'center', paddingHorizontal: 20, paddingVertical: 5 }} space={4}>
        <Row style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons name="database-outline" size={12} color="#2C384A" />
          <Text style={{ fontSize: 12, fontWeight: '400' }}>{props.number}</Text>
        </Row>
        {props?.seen ?
          (
            <Row style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons name="eye-outline" size={12} color="#2C384A" />
              <Text style={{ fontSize: 12, fontWeight: '400' }}>{props.number}</Text>
            </Row>
          ) : null
        }
        <Row style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons name="calendar-blank" size={12} color="#2C384A" />
          <Text style={{ fontSize: 12, fontWeight: '400' }}>{moment().format('DD/MM/yyyy')}</Text>
        </Row>
        {props?.download ?
          (
            <Row style={{ alignItems: 'center' }}>
              <AntDesign name="download" size={12} color="#2C384A" />
              <Text style={{ fontSize: 12, fontWeight: '400' }}>{props.number}</Text>
            </Row>
          ) : null
        }
      </Row>
    )
  }
  const renderItem = ({ item, index }) => (
    <Card
      onPress={() => navigation.navigate(ROUTER.RESOURCES_LIST)}
      style={{ marginVertical: 10 }}
      header={<RenderHeader title={item.title} />}
      footer={<RenderFooter number={item.number} seen={item?.seen} download={item?.download} />}
    >
      <Column>
        <Row style={{ paddingBottom: 5 }}>
          <Text>Nhãn (Tags): </Text>
          {item.tags.map((e, index) => (
            <Text key={`${item.key}_${e}`}>{`${e}${index == item.tags.length - 1 ? '' : ', '}`}</Text>
          ))}
        </Row>
        <Text>{item.content}</Text>
      </Column>
    </Card>
  );
  // ---------------------------------------
  // ------------- useEffect -------------
  useEffect(() => {
    if (id) {
      handleGetDoiTuongByKhoId(id, 1, 10)
    }
  }, [])
  // -------------------------------------
  // ------------- Action ----------------
  const handleGetDoiTuongByKhoId = async (id, page, size) => {
    const data = await getDoiTuongByKhoIdApi(id, page, size)
    console.log(data);
    setDoiTuong(data.items)
  }
  // -------------------------------------

  return (
    <Container>
      <Header
        style={{ backgroundColor: '#286FC3' }}
        color='#FFFFFF'
        status='primary'
        title={`Danh sách đối tượng - ${title}`}
        hideLeftIcon={false}
      />
      <Content scrollEnabled={false} safeAreaEnabled={false}>
        <List
          style={{ paddingHorizontal: 15 }}
          data={data}
          renderItem={renderItem}
        />
      </Content>
    </Container>
  )
}