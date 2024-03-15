import Container from "@components/Container/Container";
import Header from "@components/Header/Header";
import Content from '@components/Content/Content';
import React from "react";
import { Button, Icon, List, ListItem, Text } from "@ui-kitten/components";
import { Row } from "@components/Stack";
import { View } from "react-native";
import { ROUTER } from "@constants/router";

export const ResourcesScreen = ({ route, navigation }) => {
  const data = [
    { title: 'Tài nguyên nước', number: 113 },
    { title: 'Khoáng sản', number: 123 },
    { title: 'Đa dạng sinh học', number: 123 },
    { title: 'Khí tượng thuỷ văn', number: 13 },
    { title: 'Hoạt động môi trường', number: 123 },
    { title: 'Quản lý đất đai', number: 123 },
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
  const renderItem = ({ item, index }) => (
    <ListItem
      title={item.title}
      accessoryRight={<ItemAccessory number={item.number} />}
      style={{ borderBottomWidth: 1, borderColor: '#CDD3D9', backgroundColor: 'transparent' }}
      onPress={() => navigation.navigate(ROUTER.RESOURCES_DETAIL, {title: item.title})}
    />
  );
  // ---------------------------------------
  return (
    <Container>
      <Header
        style={{ backgroundColor: '#286FC3' }}
        color='#FFFFFF'
        status='primary'
        title='Danh sách kho'
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