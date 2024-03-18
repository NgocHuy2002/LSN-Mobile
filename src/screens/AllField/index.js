import Container from "@components/Container/Container";
import React from "react";
import Header from "@components/Header/Header";
import Content from '@components/Content/Content';
import ProList from "@components/ProList/ProList";
import { useIsFocused } from "@react-navigation/native";
import { Dimensions, FlatList, Image, TouchableWithoutFeedback, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { ROUTER } from "@constants/router";

export const Field = ({ navigation, route }) => {
    const { title, data, id_nganh } = route.params;
    const isFocused = useIsFocused();
    const screenWidth = Dimensions.get('screen').width * 0.5 - 10
    const numberCol = 2;
    const carouselItems = [
        {
            id: 1,
            tieude: "Item 1",
            text: "Đoàn thanh niên Sở Tài nguyên và Môi trường hưởng ứng Chương trình tình nguyện mùa Đông “Xuân gắn kết – Tết sum vầy” năm 2024",
        },
        {
            id: 2,
            tieude: "Item 2",
            text: "Huy động sức mạnh tổng hợp toàn dân trong nhiệm vụ bảo vệ môi trường",
        },
        {
            id: 3,
            tieude: "Item 3",
            text: "Text 3",
        },
        {
            id: 4,
            tieude: "Item 4",
            text: "Text 4",
        },
        {
            id: 5,
            tieude: "Item 5",
            text: "Text 5",
        },
    ]

    const renderItem = ({ item, index }) => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate(ROUTER.POST, { id: item.id })}>
            <View style={{
                borderRadius: 15,
                width: screenWidth,
                height: screenWidth,
                margin: 5
            }}>
                <Image source={require('../../assets/images/image_demo.png')} style={{ width: screenWidth, height: 76 }} />
                <Text style={{ width: screenWidth, height: screenWidth * 0.5 }}>{item.tieude}</Text>
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
                        data={id_nganh ? carouselItems : data}
                        renderItem={renderItem}
                        numColumns={numberCol}
                        keyExtractor={item => item.id}
                    />
                </View>
            </Content>
        </Container>
    )
}