const { createStackNavigator } = require("@react-navigation/stack");
import React from "react";
import LoginScreen from "../Auth/Login";
import { HomeScreen } from "../HomeScreen";
import { MapScreen } from "../MapScreen";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
        </Stack.Navigator>
    );
}
export default MyStack