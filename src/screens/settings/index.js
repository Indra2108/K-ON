import React from "react";
import { View, StyleSheet } from 'react-native';

import MainHeader from "../../components/header";
import TopHeader from "../../components/topHeader";
import ListSettings from "../../components/listSettings";

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <TopHeader name='close' color='black' navigateTo='MainScreen' />

            <MainHeader title='Settings' />

            <ListSettings title='Unlock all games' desc='Unlock all games without collecting stars.' />

            <ListSettings title='Change theme' desc='to dark' />

            <ListSettings title='Level length' desc='if you need more time.' isLevelLength={true} />

            <ListSettings title='About' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfaf5',
        paddingTop: '5%',
        paddingHorizontal: '5%',
    },
})

export default SettingScreen;