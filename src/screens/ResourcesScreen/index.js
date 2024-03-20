import Container from "@components/Container/Container";
import Header from "@components/Header/Header";
import Content from '@components/Content/Content';
import React from "react";
import { Button, Icon, List, ListItem, Text } from "@ui-kitten/components";
import { Row } from "@components/Stack";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ROUTER } from "@constants/router";

import TrafficIcon from '@assets/icons/traffic.svg'
import EnviromentIcon from '@assets/icons/enviroment.svg'
import InfoIcon from '@assets/icons/info.svg'
import NoiVuIcon from '@assets/icons/noi_vu.svg'
import NgongNghiepIcon from '@assets/icons/nong_nghiep.svg'
import XayDungIcon from '@assets/icons/xay_dung.svg'

export const ResourcesScreen = ({ route, navigation }) => {
  const numCol = 2
  const NGANH = [
    {
      key: 141,
      icon: <TrafficIcon width={100} height={100}/>,
      title: 'Giao thông vận tải',
    },
    {
      key: 140,
      icon: <InfoIcon width={100} height={100}/>,
      title: 'Thông tin truyền thông',
    },
    {
      key: 139,
      icon: <NoiVuIcon width={100} height={100}/>,
      title: 'Nội vụ',
    },
    {
      key: 424,
      icon: <EnviromentIcon width={100} height={100}/>,
      title: 'Tài nguyên môi trường',
    },
    {
      key: 138,
      icon: <XayDungIcon width={100} height={100}/>,
      title: 'Xây dựng',
    },
    {
      key: 425,
      icon: <NgongNghiepIcon width={100} height={100}/>,
      title: 'Nông nghiệp',
    },

  ];

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
  const Item = ({ title, icon, id }) => (
    <TouchableOpacity onPress={() => navigation.navigate(ROUTER.RESOURCES_BY, { id_nganh: id })} style={{flex: 1, marginTop: 15}}>
      <View style={{flex: 1, alignItems: 'center', marginRight: 5, gap: 10 }}>
        {icon}
        <Text style={{ fontSize: 15, marginTop: 5, textAlign: 'center', display: 'flex', flexWrap: 'wrap' }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
  // ---------------------------------------
  return (
    <Container>
      <Header
        style={{ backgroundColor: '#286FC3' }}
        color='#FFFFFF'
        status='primary'
        title='Tài nguyên'
        hideLeftIcon={false}
      />
      <Content scrollEnabled={false} safeAreaEnabled={false}>
        <View style={{flex: 1}}>
          <FlatList
            horizontal={false}
            data={NGANH}
            numColumns={numCol}
            renderItem={({ item }) => <Item title={item.title} icon={item.icon} id={item.key} />}
            keyExtractor={item => item.key}
          />
        </View>
      </Content>
    </Container>
  )
}