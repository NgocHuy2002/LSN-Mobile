import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import LoginScreen from './src/screens/Auth/Login';
import SafeViewAndroid from './src/components/SafeViewAndroid';
import * as ExpoIconsPack from '@components/IconsPack/ExpoIconsPack';
import AppIconsPack from '@components/IconsPack/AppIconsPack';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { BottomNavigationCustom } from './src/components/BottomTabs';
import AppNavigator from './src/screens/navigation/appNavigation';
import { NavigationContainer } from '@react-navigation/native';
import MyStack, { Navigator } from './src/screens/navigation/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import store from './src/store';
// import { FeatherIconsPack } from './feather-icons';
// import { MaterialIconsPack } from './material-icons';
export default function App() {
  return (
    <>
      <IconRegistry icons={[EvaIconsPack, AppIconsPack, ...Object.values(ExpoIconsPack)]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <NavigationContainer>
            <MenuProvider>
              <SafeAreaProvider>
                <MyStack />
                {/* <BottomNavigationCustom /> */}
                <StatusBar style="auto" />
              </SafeAreaProvider>
            </MenuProvider>
          </NavigationContainer>
        </Provider>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
