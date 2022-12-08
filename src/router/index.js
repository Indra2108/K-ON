import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from "../screens/main";
import SettingScreen from "../screens/settings";

const Router = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='MainScreen' component={MainScreen} />
                <Stack.Screen name='SettingScreen' component={SettingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;