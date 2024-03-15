import Container from "@components/Container/Container";
import React from "react";
import Header from "@components/Header/Header";
import Content from '@components/Content/Content';
import ProList from "@components/ProList/ProList";
import { useIsFocused } from "@react-navigation/native";
import { Dimensions, FlatList, Image, View } from "react-native";
import { Text } from "@ui-kitten/components";

export const Field = ({ navigation, route }) => {
    const { title } = route.params;
    const isFocused = useIsFocused();
    const screenWidth = Dimensions.get('screen').width * 0.5 - 10
    const numberCol = 2;
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

    const renderItem = ({ item, index }) => {
        return (
            <View style={{
                borderRadius: 15,
                width: screenWidth,
                height: screenWidth,
                margin: 5
            }}>
                <Image source={require('../../assets/images/image_demo.png')} style={{ width: screenWidth, height: 76 }} />
                <Text style={{ width: screenWidth, height: screenWidth * 0.5 }}>{item.text}</Text>
            </View>
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
                {/* <ProList
                    params={filterParams}
                    request={onRequest}
                    reloadDeps={[isFocused]}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={tw.h4} />}
                    contentContainerStyle={tw.p4}
                /> */}
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <FlatList
                        data={carouselItems}
                        renderItem={renderItem}
                        numColumns={numberCol}
                        keyExtractor={item => item.title}
                    />
                </View>
            </Content>
        </Container>
    )
}