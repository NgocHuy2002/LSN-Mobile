import Container from "@components/Container/Container"
import Header from "@components/Header/Header"
import { Button, Icon, Text } from "@ui-kitten/components"
import Content from '@components/Content/Content';
import TrafficIcon from '@assets/icons/traffic.svg'
import EnviromentIcon from '@assets/icons/enviroment.svg'
import InfoIcon from '@assets/icons/info.svg'
import NoiVuIcon from '@assets/icons/noi_vu.svg'
import NgongNghiepIcon from '@assets/icons/nong_nghiep.svg'
import XayDungIcon from '@assets/icons/xay_dung.svg'
import { Dimensions, FlatList, Image, View } from "react-native";
import { Column, Row } from "@components/Stack";
import { tw } from "react-native-tailwindcss";
import ima from '../../assets/images/image_demo.png'
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useState } from "react";
import { BottomNavigationCustom } from "@components/BottomTabs";

export const HomeScreen = () => {
    const [paginationNew, setPaginationNew] = useState(0)
    const [paginationHot, setPaginationHot] = useState(0)
    const screenWidth = Dimensions.get('screen').width;
    // Calculate 30% of the screen width
    const thirtyPercentOfScreenWidth = screenWidth * 0.4;
    // Calculate the result by subtracting 30% of screen width from screen width
    const result = screenWidth - thirtyPercentOfScreenWidth;
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

    const renderCard = ({ item, index }) => (
        <View style={{
            borderRadius: 5,
            width: 240,
            height: 184,
        }}>
            {/* <Text style={{ fontSize: 30 }}>{item.title}</Text> */}
            <Image source={require('../../assets/images/image_demo.png')} style={{ width: 239, height: 115, gap: 10 }} />
            <Text>{item.text}</Text>
        </View>
    )

    const Item = ({ title, icon }) => (
        <View style={{ width: 110, height: 60, flex: 1, alignItems: 'center', marginRight: 5 }}>
            {icon}
            <Text style={{ fontSize: 10, marginTop: 5 }}>{title}</Text>
        </View>
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

    return (
        <Container>
            <Header
                style={{ backgroundColor: '#286FC3' }}
                color='#FFFFFF'
                status='primary'
                title="Trang chủ"
                hideLeftIcon={false}
            />
            <Content scrollEnabled={true} safeAreaEnabled={true}>
                <View>
                    <View style={[tw.p4, { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Lĩnh vực</Text>
                        <Button appearance="ghost" accessoryLeft={renderIcon}>Xem tất cả</Button>
                    </View>
                    <View style={[tw.p4, { alignItems: 'center' }]}>
                        <FlatList
                            horizontal={true}
                            data={DATA}
                            renderItem={({ item }) => <Item title={item.title} icon={item.icon} />}
                            keyExtractor={item => item.key}
                        />
                    </View>
                </View>
                <View>
                    <View style={[tw.p4, { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Bài viết mới nhất</Text>
                        <Button appearance="ghost" accessoryLeft={renderIcon}>Xem tất cả</Button>
                    </View>
                    <View style={[tw.p4, { alignItems: 'center' }]}>
                        <Carousel
                            data={carouselItems}
                            renderItem={renderCard}
                            layout={'default'}
                            sliderWidth={Dimensions.get('screen').width}
                            itemWidth={result}
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
                    <View style={[tw.p4, { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Bài viết nổi bật</Text>
                        <Button appearance="ghost" accessoryLeft={renderIcon}>Xem tất cả</Button>
                    </View>
                    <View style={[tw.p4, { alignItems: 'center' }]}>
                        <Carousel
                            data={carouselItems}
                            renderItem={renderCard}
                            layout={'default'}
                            sliderWidth={Dimensions.get('screen').width}
                            itemWidth={result}
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

            </Content>
            <BottomNavigationCustom />
        </Container>
    )
}