import React from 'react';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import TrangChuIcon from '@assets/icons/trang_chu.svg'
import TaiNguyenIcon from '@assets/icons/tai_nguyen.svg'
import BanDoIcon from '@assets/icons/ban_do.svg'
import BaiVietIcon from '@assets/icons/bai_viet.svg'
import ThemIcon from '@assets/icons/them.svg'
import { useSelector } from 'react-redux';

export const BottomNavigationCustom = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const route = useSelector(state => state.router.route);
  // console.log(route);
  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <BottomNavigationTab title='Trang chủ' icon={<Icon name={'home'} />} />
      <BottomNavigationTab title='Tài nguyên' icon={<Icon name={'archive'} />} />
      <BottomNavigationTab title='Bản đồ' icon={<Icon name={'layers'} />} />
      <BottomNavigationTab title='Bài viết' icon={<Icon name={'browser'} />} />
      <BottomNavigationTab title='Thêm' icon={<Icon name={'menu'} />} />
    </BottomNavigation>
  );
};