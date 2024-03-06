import Container from "@components/Container/Container"
import Header from "@components/Header/Header"
import { Text } from "@ui-kitten/components"
import Content from '@components/Content/Content';

export const HomeScreen = () => {
    return (
        <Container>
            <Header
                status='primary'
                title="Trang chủ"
                hideLeftIcon={true}
            />
            <Content scrollEnabled={false} safeAreaEnabled={false}>
                <Text>HomeScreen</Text>
            </Content>
        </Container>
    )
}