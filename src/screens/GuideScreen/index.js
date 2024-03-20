import Container from "@components/Container/Container";
import Header from "@components/Header/Header";
import Content from '@components/Content/Content';
import React, { useEffect, useState } from "react";
import { Drawer, DrawerGroup, DrawerItem, Icon, Menu, MenuGroup, MenuItem } from "@ui-kitten/components";
import { getGuideApi } from "@services/GuideService/GuideService";

export const GuideScreen = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [guide, setGuide] = useState();
  // ------------- useEffect -------------
  useEffect(() => {
    handleGetGuide('C_HDSD_CTT', 1, 10)
  }, [])
  // -------------------------------------
  // ------------- Action ----------------
  const handleGetGuide = async (type, page, size) => {
    const data = await getGuideApi(type, page, size)
    setGuide(data.items)
  }
  // -------------------------------------
  return (
    <Container>
      <Header
        style={{ backgroundColor: '#286FC3' }}
        color='#FFFFFF'
        status='primary'
        title='Chi tiết dữ liệu'
        hideLeftIcon={false}
      />
      <Content scrollEnabled={false} safeAreaEnabled={false}>
        <Menu
          selectedIndex={selectedIndex}
          style={{ padding: 10 }}
          onSelect={index => setSelectedIndex(index)}
        >
          {guide?.map((item) => {
            return (
              <MenuGroup
                title={item.name}
                key={item.id}
              >
                {item.child.map((subItem) => {
                  return(
                    <MenuItem title={subItem.name} key={subItem.id}/>
                  )
                })}
              </MenuGroup>
            )
          })}
          {/* <MenuGroup
            title='Hướng dẫn lấy chi tiết dữ liệu bảng'
            accessoryLeft={<Icon name={'file-outline'} />}
          >

          </MenuGroup>
          <MenuGroup
            title='Hướng dẫn kết nối API xử lý data'
          >
            <MenuItem title={'Hướng dẫn lấy danh sách theo danh mục'} />
            <MenuItem title={'Hướng dẫn lấy từ khóa'} />
          </MenuGroup> */}
        </Menu>
      </Content>
    </Container>
  )
}