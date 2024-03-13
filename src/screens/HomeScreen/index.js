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
import { router } from "@constants/router";
// import Menu, { MenuDivider, MenuItem } from "react-native-material-menu";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { renderers } from 'react-native-popup-menu';
import { useFocusEffect } from "@react-navigation/native";
// import Modal from "@components/Modal/Modal";
const { SlideInMenu } = renderers;

export const HomeScreen = ({ navigation }) => {
    const [paginationNew, setPaginationNew] = useState(0)
    const [paginationHot, setPaginationHot] = useState(0)
    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height * 0.3;
    // Calculate 30% of the screen width
    const thirtyPercentOfScreenWidth = screenWidth * 0.3;
    // Calculate the result by subtracting 30% of screen width from screen width
    const result = screenWidth - thirtyPercentOfScreenWidth;
    const [visible, setVisible] = useState(false);
    const DATA = [
        {
            key: 1,
            icon: <TrafficIcon />,
            title: 'Giao thông vận tải',
        },
        {
            key: 3,
            icon: <InfoIcon />,
            title: 'Thông tin truyền thông',
        },
        {
            key: 4,
            icon: <NoiVuIcon />,
            title: 'Nội vụ',
        },
        {
            key: 2,
            icon: <EnviromentIcon />,
            title: 'Tài nguyên môi trường',
        },
        {
            key: 6,
            icon: <XayDungIcon />,
            title: 'Xây dựng',
        },
        {
            key: 5,
            icon: <NgongNghiepIcon />,
            title: 'Nông nghiệp',
        },

    ];

    const carouselItems = [
        {
            title: "Item 1",
            text: "Đoàn thanh niên Sở Tài nguyên và Môi trường hưởng ứng Chương trình tình nguyện mùa Đông “Xuân gắn kết – Tết sum vầy” năm 2024",
        },
        {
            title: "Item 2",
            text: "Huy động sức mạnh tổng hợp toàn dân trong nhiệm vụ bảo vệ môi trường",
        },
        {
            title: "Item 3",
            text: "Text 3",
        },
        {
            title: "Item 4",
            text: "Text 4",
        },
        {
            title: "Item 5",
            text: "Text 5",
        },
    ]
    const renderIcon = (props) => (
        <Icon
            {...props}
            name={'grid'}
        />
    );
    // ------- Render --------------------
    const renderCard = ({ item, index }) => (
        <View style={{
            borderRadius: 5,
            width: Dimensions.get('screen').width * 0.7,
            height: Dimensions.get('screen').height * 0.2 + 20,
        }}>
            {/* <Text style={{ fontSize: 30 }}>{item.title}</Text> */}
            <Image source={require('../../assets/images/image_demo.png')} style={{ width: Dimensions.get('screen').width * 0.7, height: 115 }} />
            <Text style={{ textAlign: 'justify', display: 'flex', flexWrap: 'wrap', width: Dimensions.get('screen').width * 0.7 }}>{item.text}</Text>
        </View>
    )

    const Item = ({ title, icon }) => (
        <TouchableOpacity onPress={() => navigation.navigate(router.FIELD, { title: title })}>
            <View style={{ width: 70, height: 80, flex: 1, alignItems: 'center', marginRight: 5 }}>
                {icon}
                <Text style={{ fontSize: 10, marginTop: 5, textAlign: 'center', display: 'flex', flexWrap: 'wrap' }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );

    function PaginationView(props) {
        const { items, activeSlide } = props;
        return (
            <Pagination
                dotsLength={items.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: "transparent" }}
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
    // useEffect(() => {
    //     handleBackButton = () => {
    //         Alert.alert(
    //             'Thoát ứng dụng',
    //             'Thoát khỏi ứng dụng?', [{
    //                 text: 'Hủy',
    //                 onPress: () => console.log('Cancel Pressed'),
    //                 style: 'cancel'
    //             }, {
    //                 text: 'Đồng ý',
    //                 onPress: () => BackHandler.exitApp()
    //             },], {
    //             cancelable: false
    //         }
    //         )
    //         return true;
    //     }
    //     BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    //     return () => {
    //         BackHandler.addEventListener(
    //             "hardwareBackPress",
    //             handleBackButton
    //         );
    //     };
    // }, []);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         handleBackButton = () => {
    //             Alert.alert(
    //                 'Thoát ứng dụng',
    //                 'Thoát khỏi ứng dụng?', [{
    //                     text: 'Hủy',
    //                     onPress: () => console.log('Cancel Pressed'),
    //                     style: 'cancel'
    //                 }, {
    //                     text: 'Đồng ý',
    //                     onPress: () => BackHandler.exitApp()
    //                 },], {
    //                 cancelable: false
    //             }
    //             )
    //             return true;
    //         }
    //         BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    //         return () => {
    //             BackHandler.addEventListener(
    //                 "hardwareBackPress",
    //                 handleBackButton
    //             );
    //         };
    //     }, [])
    // );
    // ------------------------------------
    return (
        <Container>
            <Header
                style={{ backgroundColor: '#286FC3' }}
                color='#FFFFFF'
                status='primary'
                title="Trang chủ"
                hideLeftIcon={true}
                onBackPress={() => console.log('test')}
            />
            <Content scrollEnabled={true} safeAreaEnabled={true}>
                <View>
                    <View style={[tw.p2, { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Lĩnh vực</Text>
                        <Button appearance="ghost" accessoryLeft={renderIcon} onPress={() => setVisible(true)}>Xem tất cả</Button>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <FlatList
                            horizontal={true}
                            data={DATA}
                            renderItem={({ item }) => <Item title={item.title} icon={item.icon} />}
                            keyExtractor={item => item.key}
                        />
                    </View>
                </View>
                <View>
                    <View style={[tw.p2, { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Bài viết mới nhất</Text>
                        <Button appearance="ghost" accessoryLeft={renderIcon}>Xem tất cả</Button>
                    </View>
                    <View>
                        <Carousel
                            data={carouselItems}
                            renderItem={renderCard}
                            layout={'default'}
                            sliderWidth={Dimensions.get('screen').width}
                            itemWidth={Dimensions.get('screen').width * 0.7}
                            autoplayDelay={2000}
                            autoplayInterval={3000}
                            scrollEnabled={true}
                            useScrollView={true}
                            onSnapToItem={(index) => setPaginationNew(index)}
                        />
                        <PaginationView
                            items={carouselItems}
                            activeSlide={paginationNew}
                        />
                    </View>
                </View>
                <View>
                    <View style={[tw.p2, { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Bài viết nổi bật</Text>
                        <Button appearance="ghost" accessoryLeft={renderIcon}>Xem tất cả</Button>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Carousel
                            data={carouselItems}
                            renderItem={renderCard}
                            layout={'default'}
                            sliderWidth={Dimensions.get('screen').width}
                            itemWidth={Dimensions.get('screen').width * 0.7}
                            autoplayDelay={2000}
                            autoplayInterval={3000}
                            scrollEnabled={true}
                            useScrollView={true}
                            onSnapToItem={(index) => setPaginationHot(index)}
                        />
                        <PaginationView
                            items={carouselItems}
                            activeSlide={paginationHot}
                        />
                    </View>
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
                                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Lĩnh vực</Text>
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