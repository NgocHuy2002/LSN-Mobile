import Container from "@components/Container/Container"
import Header from "@components/Header/Header"
import { Button, Card, Icon, Text } from "@ui-kitten/components"
import Content from '@components/Content/Content';
import TrafficIcon from '@assets/icons/traffic.svg'
import EnviromentIcon from '@assets/icons/enviroment.svg'
import InfoIcon from '@assets/icons/info.svg'
import NoiVuIcon from '@assets/icons/noi_vu.svg'
import NgongNghiepIcon from '@assets/icons/nong_nghiep.svg'
import XayDungIcon from '@assets/icons/xay_dung.svg'
import { Dimensions, FlatList, Image, View, Modal, TouchableWithoutFeedback, ScrollView, TouchableOpacity, BackHandler, Alert } from "react-native";
import { Column, Row } from "@components/Stack";
import { tw } from "react-native-tailwindcss";
import Carousel, { Pagination } from "react-native-snap-carousel";
import React, { useEffect, useState } from "react";
import { BottomNavigationCustom } from "@components/BottomTabs";
import { ROUTER } from "@constants/router";
// import Menu, { MenuDivider, MenuItem } from "react-native-material-menu";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { renderers } from 'react-native-popup-menu';
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "@containers/Auth/saga/selectors";
import { getHottestPostsRoutine, getLatestPostsRoutine, getLinhVucRoutine } from "./saga/routines";
import { selectPosts } from "./saga/selectors";
import { API } from "@constants/api";
// import Modal from "@components/Modal/Modal";
const { SlideInMenu } = renderers;
import request from '@services/request';
import { getHottestPostsApi, getLatestPostsApi, getLinhVucApi } from "@services/PostsService/PostsService";
import { formatString } from "@helpers/formatString";
import { Video } from 'expo-av';


export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [latest, setLatest] = useState([]);
  const [hottest, setHottest] = useState([]);
  const [paginationNew, setPaginationNew] = useState(0)
  const [paginationHot, setPaginationHot] = useState(0)
  const screenWidth = Dimensions.get('screen').width;
  const result = Dimensions.get('screen').width * 0.8;
  const [visible, setVisible] = useState(false);
  const DATA = [];

  const renderIcon = (props) => (
    <Icon
      {...props}
      name={'grid'}
    />
  );
  // ------- Render --------------------
  const truncateString = (str, maxLength) => {
    if (str?.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    }
    return str;
  }

  const renderCard = ({ item, index }) => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(ROUTER.POST, { id: item.id })}>
      <View style={{
        borderRadius: 5,
        width: result,
        height: result - 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <View style={{ width: '100%', height: result / 4 * 3, borderRadius: 5, overflow: 'hidden' }}>
          <Image
            source={
              item.imageLink ? { uri: formatString(API.GET_IMAGE, item.imageLink) } : require('@assets/images/product-no-image.png')
            }
            style={{ resizeMode: 'cover', width: result, height: (result / 4) * 3 }} />
        </View>
        <Text style={{ textAlign: 'justify', display: 'flex', flexWrap: 'wrap', width: '100%', height: 50, paddingTop: 5 }}>{truncateString(item.tieude, 85)}</Text>
      </View>
    </TouchableWithoutFeedback>
  )

  const Item = ({ title, icon, id }) => (
    <TouchableOpacity onPress={() => navigation.navigate(ROUTER.FIELD, { title: title, id_nganh: id })}>
      <View style={{ width: 70, height: 80, flex: 1, alignItems: 'center', marginRight: 5, }}>
        {icon}
        <Text style={{ fontSize: 10, marginTop: 5, textAlign: 'center', display: 'flex', flexWrap: 'wrap' }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  function PaginationView(props) {
    const { items, activeSlide } = props;
    return (
      <View>
        <Pagination
          dotsLength={items?.length || 1}
          activeDotIndex={activeSlide}
          containerStyle={{ backgroundColor: "transparent", paddingVertical: 0, paddingBottom: 10 }}
          dotStyle={{
            width: 7,
            height: 7,
            borderRadius: 5,
          }}
          dotColor='#286FC3'
          inactiveDotColor='#757575'
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }
  const renderMenu = ({ items }) => {
    const itemWidth = (screenWidth) / 4;
    return items.map((item) => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate(ROUTER.FIELD, { title: item.title, id_nganh: item.key })} key={item.key}>
          <View style={{ width: itemWidth, height: 60, display: 'flex', alignItems: 'center' }}>
            {item.icon}
            <Text style={{ fontSize: 10, marginTop: 5, textAlign: 'center' }}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  // ------- ----- --------------------
  // ---------- useEffect --------------
  useEffect(() => {
    // dispatch(getLinhVucRoutine.trigger())
    // dispatch(getLatestPostsRoutine.trigger())
    // dispatch(getHottestPostsRoutine.trigger())

    // handleCallLinhVucApi('C_LINHVUC', 1, 10)
    // handleCallLatestPostsApi()
    // handleCallHottestPostsApi()
  }, [])
  // ------------------------------------
  // --------------- Action --------------
  const handleCallLinhVucApi = async (type, page, size) => {
    const data = await getLinhVucApi(type, page, size)
    console.log("Linh vuc >>>", data.filter(x => x.id == 139));
  }
  const handleCallLatestPostsApi = async () => {
    const data = await getLatestPostsApi()
    setLatest(data)
  }
  const handleCallHottestPostsApi = async () => {
    const data = await getHottestPostsApi()
    setHottest(data)
  }

  // ------------------------------------
  return (
    <Container>
      <Header
        style={{ backgroundColor: '#286FC3' }}
        color='#FFFFFF'
        status='primary'
        title="Camera trực tiếp"
        hideLeftIcon={true}
      />
      <Content scrollEnabled={true} safeAreaEnabled={true}>
        {DATA.length > 0 ?
          DATA.map((item) => {
            return (
              <Card style={{ width: Dimensions.get('screen').width - 20, height: Dimensions.get('screen').height / 3, margin: 10 }}>
                <Text>Camera 1</Text>
              </Card>
            )
          }) :
          <Card style={{ width: Dimensions.get('screen').width - 20, height: Dimensions.get('screen').height / 3, margin: 10 }}>
            {/* <Video
              source={{ uri: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' }}
              rate={1.0}
              volume={1.0}
              isMuted={true}
              resizeMode="contain"
              shouldPlay={true}
              collapsable
              useNativeControls
              style={{ width: '100%', height: '100%'}} /> */}
          </Card>
        }
      </Content>
    </Container>
  )
}