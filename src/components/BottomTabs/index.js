import React from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import TrangChuIcon from '@assets/icons/trang_chu.svg'
import TaiNguyenIcon from '@assets/icons/tai_nguyen.svg'
import BanDoIcon from '@assets/icons/ban_do.svg'
import BaiVietIcon from '@assets/icons/bai_viet.svg'
import ThemIcon from '@assets/icons/them.svg'

export const BottomNavigationCustom = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
    >
      <BottomNavigationTab title='Trang chủ' icon={<TrangChuIcon />}/>
      <BottomNavigationTab title='Tài nguyên' icon={<TaiNguyenIcon />}/>
      <BottomNavigationTab title='Bản đồ' icon={<BanDoIcon />}/>
      <BottomNavigationTab title='Bài viết' icon={<BaiVietIcon />}/>
      <BottomNavigationTab title='Thêm' icon={<ThemIcon />}/>
    </BottomNavigation>
  );
};