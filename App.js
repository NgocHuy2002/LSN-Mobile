import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import LoginScreen from './src/screens/Auth/Login';
import SafeViewAndroid from './src/components/SafeViewAndroid';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { BottomNavigationCustom } from './src/components/BottomTabs';
import AppNavigator from './src/screens/navigation/appNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/screens/navigation/navigation';

// import { FeatherIconsPack } from './feather-icons';
// import { MaterialIconsPack } from './material-icons';
export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <LoginScreen />
            {/* <AppNavigator /> */}
            {/* <BottomNavigationCustom /> */}
            {/* <Navigator /> */}
            <StatusBar style="auto" />
          </SafeAreaView>
        </NavigationContainer>
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
