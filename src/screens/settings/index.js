import React from "react";
import { View, StyleSheet } from 'react-native';

import FlashMessage from "react-native-flash-message";

import { ListSettings, MainHeader, TopHeader } from "../../components";

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <TopHeader name='close' color='black' navigateTo='MainScreen' />

            <MainHeader style={{ fontSize: 35 }} title='Settings' />

            <ListSettings title='Unlock all games' desc='Unlock all games without collecting stars.' />

            <ListSettings title='Change theme' desc='to dark' />

            <ListSettings title='Level length' desc='if you need more time.' isLevelLength={true} />

            <ListSettings title='About' />

            <FlashMessage
                position="bottom"
                hideOnPress={false}
            />
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