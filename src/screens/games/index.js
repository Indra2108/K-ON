import React from "react";
import { View } from 'react-native';

import { TopHeader, MainHeader } from "../../components";

const GamesScreen = () => {
    return (
        <View>
            <TopHeader
                name='close'
                color='black'
                navigateTo='MainScreen'
            />

            <MainHeader
                title='Larger number'
                desc='Look at the center point, while choosing a larger number. And try to do it as quickly as possible'
            />
        </View>
    )
}

export default GamesScreen;