import Container from "@components/Container/Container";
import Content from "@components/Content/Content";
import { Column } from "@components/Stack";
import { router } from "@constants/router";
import { Button, Icon, Text } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";

export const SuccessScreen = ({ navigation, route }) => {
    const { content } = route.params;
    return (
        <Container>
            <Content>
                <Column space={4} style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View style={{marginTop: 50}}>
                        <Icon name={'checkmark-circle-2'} fill='#57BF99' style={{ width: 151, height: 151, alignSelf: 'center' }} />
                        <Text style={{ alignSelf: 'center' }}>{content}</Text>
                    </View>
                    <Button style={{ borderRadius: 100, width: 343, height: 51, alignSelf: 'center', marginBottom: '10%' }} onPress={() => navigation.navigate(router.HOME)}>Đăng nhập</Button>
                </Column>
            </Content>
        </Container>
    )
}