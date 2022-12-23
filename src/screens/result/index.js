import React from "react";
import { View } from 'react-native';
import { MainHeader, TopHeader } from "../../components";

const ResultScreen = () => {
    return (
        <View>
            <TopHeader name='close' color='black' navigateTo='MainScreen' />

            <MainHeader />
        </View>
    )
}

export default ResultScreen