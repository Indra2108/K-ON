import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from "../screens/main";
import SettingScreen from "../screens/settings";
import GamesScreen from "../screens/games";
import AboutScreen from "../screens/about";
import ResultScreen from "../screens/result";

const Router = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='MainScreen' component={MainScreen} />
                <Stack.Screen name='GamesScreen' component={GamesScreen} />
                <Stack.Screen name='SettingScreen' component={SettingScreen} />
                <Stack.Screen name='AboutScreen' component={AboutScreen} />
                <Stack.Screen name='ResultScreen' component={ResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;