import { router } from '@constants/router';
import { HomeScreen } from '@containers/HomeScreen';
import MenuScreen from '@containers/MenuScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@ui-kitten/components';
import TrangChuIcon from '@assets/icons/trang_chu.svg'
import TaiNguyenIcon from '@assets/icons/tai_nguyen.svg'
import BanDoIcon from '@assets/icons/ban_do.svg'
import BaiVietIcon from '@assets/icons/bai_viet.svg'
import ThemIcon from '@assets/icons/them.svg'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Field } from '@containers/AllField';
import { createStackNavigator } from '@react-navigation/stack';
import { PostsScreen } from '@containers/PostsScreen';
import { PostDetail } from '@containers/PostsScreen/PostDetail';
import { ContactScreen } from '@containers/ContactScreen';
import { ResourcesScreen } from '@containers/ResourcesScreen';
import { ResourcesDetail } from '@containers/ResourcesScreen/ResourcesDetail';
import { ResourcesList } from '@containers/ResourcesScreen/ResourcesList';
import { DataDetail } from '@containers/ResourcesScreen/DataDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainNavigator() {
    function HomeStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen name={router.FIELD} component={Field} />
            </Stack.Navigator>
        );
    }
    return (
        <Tab.Navigator tabBarOptions={{
            labelStyle: { fontSize: 10, paddingBottom: 10 },
            style: { paddingTop: 10, height: 60 }
        }}>
            <Tab.Screen name={router.HOME} component={HomeScreen}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name={router.FIELD} component={Field} options={{ tabBarButton: () => <></> }} />
            <Tab.Screen name={router.POST} component={PostDetail} options={{ tabBarButton: () => <></> }} />
            <Tab.Screen name={router.CONTACT} component={ContactScreen} options={{ tabBarButton: () => <></> }} />
            <Tab.Screen name={router.RESOURCES_DETAIL} component={ResourcesDetail} options={{ tabBarButton: () => <></> }} />
            <Tab.Screen name={router.RESOURCES_LIST} component={ResourcesList} options={{ tabBarButton: () => <></> }} />
            <Tab.Screen name={router.DATA_DETAIL} component={DataDetail} options={{ tabBarButton: () => <></> }} />
            <Tab.Screen name={router.RESOURCES} component={ResourcesScreen}
                options={{
                    tabBarLabel: 'Tài nguyên',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="database" color={color} size={size} />
                    ),
                }}
            />
            {/*
            <Tab.Screen name={'BanDo'} component={null}
                options={{
                    tabBarLabel: 'Bản đồ',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="map" color={color} size={size} />
                    ),
                }}
            />*/}
            <Tab.Screen name={router.POSTS} component={PostsScreen}
                options={{
                    tabBarLabel: 'Bài viết',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="newspaper-variant-multiple" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen name={router.MENU} component={MenuScreen}
                options={{
                    tabBarLabel: 'Thêm',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="menu" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
};
