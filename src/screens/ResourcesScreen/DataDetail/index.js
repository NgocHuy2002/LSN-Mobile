import Container from "@components/Container/Container";
import Header from "@components/Header/Header";
import Content from '@components/Content/Content';
import React from "react";
import { Button, Card, Icon, List, ListItem, Text } from "@ui-kitten/components";
import { Column, Row } from "@components/Stack";
import { Image, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from "moment";
import { router } from "@constants/router";

export const DataDetail = ({ route, navigation }) => {
  // const { title } = route.params;
  const data = {
    name: 'Trạm quan trắc nước mặt',
    keys: ['TNMT', 'Trạm quan trắc'],
    data: [
      { name: 'Nhãn thông tin', content: 'Hiển thị chú giải thông tin', key: 1 },
      { name: 'Nhãn thông tin', content: 'Hiển thị chú giải thông tin', key: 2 },
      { name: 'Nhãn thông tin', content: 'Hiển thị chú giải thông tin', key: 3 },
    ]
  }
  const tableData = [
    {file: 'tramquantrac.xls', memory: '1,2', type: 'Mb', key: 1},
    {file: 'tramquantrac.xls', memory: '1,2', type: 'Mb', key: 2},
  ]
  // ----------- Render --------------------
const RenderHeaderTable = (props) => {
  return (
    <Row>

    </Row>
  )
}
  // ---------------------------------------
  // --------------Action----------------
  // ---------------------------------------

  return (
    <Container>
      <Header
        style={{ backgroundColor: '#286FC3' }}
        color='#FFFFFF'
        status='primary'
        title='Chi tiết dữ liệu'
        hideLeftIcon={false}
      />
      <Content scrollEnabled={false} safeAreaEnabled={false}>
        <View style={{ margin: 10, padding: 10, borderBottomWidth: 1, borderColor: '#E8E8E8' }}>
          <Column space={4}>
            <Row><Text style={{ fontWeight: 'bold' }}>Đối tượng: </Text><Text>{data.name}</Text></Row>
            <Row>
              <Text style={{ fontWeight: 'bold' }}>Từ khóa: </Text>
              <Row space={2}>
                {data.keys.map((e) => {
                  return (
                    <View key={e} style={{ width: 'auto', padding: 5, height: 24, borderRadius: 20, backgroundColor: '#EEEEEE', justifyContent: 'center', alignItems: 'center' }}>
                      <Text key={`${e}_key`} style={{ fontSize: 10 }}>{e}</Text>
                    </View>
                  )
                })}
              </Row>
            </Row>
          </Column>
        </View>
        <View style={{ margin: 10, paddingHorizontal: 10, paddingBottom: 10, borderBottomWidth: 1, borderColor: '#E8E8E8' }}>
          <Column space={2}>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Thông tin dữ liệu</Text>
            {data.data.map((e) => {
              return (
                <Row space={2} key={`${e.name}_row_${e.key}`}>
                  <Text style={{ fontWeight: 'bold', fontSize: 12 }} key={`${e.name}_${e.key}`}>{`${e.name}: `}</Text>
                  <Text style={{ color: '#92969A', fontSize: 12 }} key={e.key}>{e.content}</Text>
                </Row>
              )
            })}
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>Hình ảnh</Text>
            <Image style={{width: 80, height: 80, backgroundColor: '#CDD3D9'}}/>
          </Column>
        </View>
        <View style={{ padding: 10 }}>
          <Card>
            <Row space={10} style={{alignItems: 'center', borderBottomWidth: 1, paddingBottom: 5, borderColor: '#CDD3D9'}}>
              <Text style={{fontSize: 10}}>STT</Text>
              <Text style={{fontSize: 10}}>Tên tệp tin</Text>
              <Text style={{fontSize: 10}}>Dung lượng</Text>
              <Text style={{fontSize: 10}}>Thời gian</Text>
            </Row>
            {tableData.map((e, index) => {
              return (
                <Row space={10} style={{alignItems: 'center', height: 57, borderBottomWidth: 1, borderColor: '#CDD3D9'}} key={e.key}>
                    <Text key={`${e.key}_${e.index}`} style={{fontSize: 10}}>{index + 1}</Text>
                    <Text key={`${e.key}_${e.file}`} style={{fontSize: 10}}>{e.file}</Text>
                    <Text key={`${e.key}_${e.memory}`} style={{fontSize: 10}}>{`${e.memory} ${e.type}`}</Text>
                    <Text key={`${e.key}_${e.key}`} style={{fontSize: 10}}>{moment().format('DD/MM/yyyy')}</Text>
                </Row>
              )
            })}
          </Card>
        </View>
      </Content>
    </Container>
  )
}