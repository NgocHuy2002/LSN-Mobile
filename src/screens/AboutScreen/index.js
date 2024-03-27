import Container from "@components/Container/Container";
import Header from "@components/Header/Header";
import { View, ImageBackground, Dimensions, StyleSheet } from "react-native";
import Content from '@components/Content/Content';
import React, { useEffect, useState } from "react";
import { Avatar, Card, Drawer, DrawerGroup, DrawerItem, Icon, Menu, MenuGroup, MenuItem, Text } from "@ui-kitten/components";
import { Column, Row } from "@components/Stack";


export const AboutScreen = ({ navigation }) => {
  const AvatarImageComponentShowcase = () => (
    <Avatar
      source={require('@assets/images/logo.png')}
      ImageComponent={ImageBackground}
      style={{borderWidth: 1, borderColor: '#E8E8E8'}}
    />
  );
  return (
    <Container>
      <Header
        style={{ backgroundColor: '#286FC3' }}
        color='#FFFFFF'
        status='primary'
        title='Giới thiệu'
        hideLeftIcon={false}
      />
      <Content scrollEnabled={true} safeAreaEnabled={false}>
        <Card style={styles.card}>
          <Row space={4}>
            {/* <Avatar shape='rounded' source={require('@assets/images/logo.png')} /> */}
            {AvatarImageComponentShowcase()}
            <Column space={2}>
              <Text>
                Cổng thông tin điện tử tỉnh Lạng Sơn
              </Text>
              <Text>
                Phiên bản 1.0
              </Text>
            </Column>
          </Row>
        </Card>
      </Content>
    </Container>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  card: {
    marginTop: 10,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    height: 100,
    justifyContent: 'center'
  }
})