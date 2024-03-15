import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import DynamicStatusBar from '@components/DynamicStatusBar/DynamicStatusBar';
import mappingTheme from '@theme/mappingTheme';
import * as ExpoIconsPack from '@components/IconsPack/ExpoIconsPack';
import { Host as PortalProvider } from 'react-native-portalize';
import AppIconsPack from '@components/IconsPack/AppIconsPack';
import { RootSiblingParent } from 'react-native-root-siblings';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
// import MyStack, { Navigator } from './src/screens/navigation/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { MenuProvider } from 'react-native-popup-menu';
import { navigationRef } from '@services/navigationService';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import MyStack from '@containers/navigation/navigation';
import { tw } from 'react-native-tailwindcss';
import AppLoading from './AppLoading/AppLoading';

// import { FeatherIconsPack } from './feather-icons';
// import { MaterialIconsPack } from './material-icons';

export default function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {/* <MenuProvider> */}
      <SafeAreaProvider>
        <RootSiblingParent>
          <IconRegistry icons={[EvaIconsPack, AppIconsPack, ...Object.values(ExpoIconsPack)]} />
          <ApplicationProvider {...eva} theme={eva.light} mapping={eva.mapping} customMapping={mappingTheme}>
            <GestureHandlerRootView style={tw.flex1}>
              <PortalProvider>
                <NavigationContainer ref={navigationRef}>
                  <DynamicStatusBar
                  // darkTheme={darkTheme} 
                  />
                  <MyStack />
                  <AppLoading />
                </NavigationContainer>
              </PortalProvider>
            </GestureHandlerRootView>
          </ApplicationProvider>
          {/* <BottomNavigationCustom /> */}
        </RootSiblingParent>
      </SafeAreaProvider>
      {/* </MenuProvider> */}
      {/* </PersistGate> */}
      {/* </Provider> */}
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