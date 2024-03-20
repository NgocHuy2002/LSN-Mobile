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


export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [latest, setLatest] = useState([]);
  const [hottest, setHottest] = useState([]);
  const [paginationNew, setPaginationNew] = useState(0)
  const [paginationHot, setPaginationHot] = useState(0)
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height * 0.3;
  const thirtyPercentOfScreenWidth = screenWidth * 0.3;
  const result = screenWidth - thirtyPercentOfScreenWidth;
  const [visible, setVisible] = useState(false);
  const DATA = [
    {
      key: 141,
      icon: <TrafficIcon />,
      title: 'Giao thông vận tải',
    },
    {
      key: 140,
      icon: <InfoIcon />,
      title: 'Thông tin truyền thông',
    },
    {
      key: 139,
      icon: <NoiVuIcon />,
      title: 'Nội vụ',
    },
    {
      key: 424,
      icon: <EnviromentIcon />,
      title: 'Tài nguyên môi trường',
    },
    {
      key: 138,
      icon: <XayDungIcon />,
      title: 'Xây dựng',
    },
    {
      key: 425,
      icon: <NgongNghiepIcon />,
      title: 'Nông nghiệp',
    },

  ];

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
        width: Dimensions.get('screen').width * 0.8,
        height: 200,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <Image
          source={{
            uri: item.imageLink ? formatString(API.GET_IMAGE, item.imageLink) : 'https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png'
          }}
          style={{ resizeMode: 'cover', width: '100%', height: 150 }} />
        <Text style={{ textAlign: 'justify', display: 'flex', flexWrap: 'wrap', width: '100%', height: 50 }}>{truncateString(item.tieude, 85)}</Text>
      </View>
    </TouchableWithoutFeedback>
  )

  const Item = ({ title, icon, id }) => (
    <TouchableOpacity onPress={() => navigation.navigate(ROUTER.FIELD, { title: title, id_nganh: id })}>
      <View style={{ width: 70, height: 80, flex: 1, alignItems: 'center', marginRight: 5 }}>
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
          containerStyle={{ backgroundColor: "transparent", paddingVertical: 0 }}
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
        <TouchableOpacity onPress={() => console.log(item.title)} key={item.key}>
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
    handleCallLatestPostsApi()
    handleCallHottestPostsApi()
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
        title="Trang chủ"
        hideLeftIcon={true}
      />
      <Content scrollEnabled={true} safeAreaEnabled={true}>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Ngành</Text>
            <Button appearance="ghost" accessoryLeft={renderIcon} onPress={() => setVisible(true)}>Xem tất cả</Button>
          </View>
          <View style={{ alignItems: 'center' }}>
            <FlatList
              horizontal={true}
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} icon={item.icon} id={item.key} />}
              keyExtractor={item => item.key}
            />
          </View>
        </View>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Bài viết mới nhất</Text>
            <Button
              appearance="ghost"
              accessoryLeft={renderIcon}
              onPress={() => navigation.navigate(ROUTER.FIELD, { title: 'Bài viết mới nhất', data: latest, id_nganh: null })}
            >
              Xem tất cả
            </Button>
          </View>
          {latest ?
            <View>
              <Carousel
                data={latest?.slice(0, 5) || null}
                renderItem={renderCard || null}
                layout={'default'}
                sliderWidth={Dimensions.get('screen').width}
                itemWidth={Dimensions.get('screen').width - 40}
                autoplayDelay={2000}
                inactiveSlideScale={1}
                inactiveSlideShift={0}
                loop={true}
                autoplayInterval={3000}
                scrollEnabled={true}
                useScrollView={true}
                onSnapToItem={(index) => setPaginationNew(index)}
              />
              <PaginationView
                items={latest?.slice(0, 5) || null}
                activeSlide={paginationNew}
              />
            </View> : null
          }
        </View>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Bài viết nổi bật</Text>
            <Button
              appearance="ghost"
              accessoryLeft={renderIcon}
              onPress={() => navigation.navigate(ROUTER.FIELD, { title: 'Bài viết nổi bật', data: hottest, id_nganh: null })}
            >
              Xem tất cả
            </Button>
          </View>
          {hottest ?
            <View style={{ alignItems: 'center' }}>
              <Carousel
                data={hottest?.slice(0, 5)}
                renderItem={renderCard}
                loop={true}
                layout={'default'}
                sliderWidth={Dimensions.get('screen').width}
                itemWidth={Dimensions.get('screen').width - 40}
                autoplayDelay={2000}
                autoplayInterval={3000}
                scrollEnabled={true}
                inactiveSlideScale={1}
                inactiveSlideShift={0}
                useScrollView={true}
                onSnapToItem={(index) => setPaginationHot(index)}
              />
              <PaginationView
                items={hottest?.slice(0, 5) || null}
                activeSlide={paginationHot}
              />
            </View> : null
          }
        </View>
        <Modal
          visible={visible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setVisible(false)} style={{ zIndex: 1 }}>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, zIndex: 100 }}>
              <Card disabled={true} style={{ position: 'absolute', top: '60%', height: '40%', borderTopRightRadius: 25, borderTopLeftRadius: 25 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Ngành</Text>
                <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', gap: 20 }}>
                  {renderMenu({ items: DATA })}
                </ScrollView>
              </Card>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </Content>
    </Container>
  )
}