import React from "react";
import { StyleSheet, View, FlatList, StatusBar } from 'react-native';

import TopHeader from "../../components/topHeader";
import MainHeader from "../../components/header";
import ListGames from "../../components/listGames";
import list_games from "../../assets/data/list_games";

function MainScreen() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#fbfaf5' />

            <TopHeader name='gear' color='black' navigateTo='SettingScreen' />

            <MainHeader title='Exercises.' desc="Practice daily or when you can't concentrate and you will see improvement very soon." />

            <FlatList
                data={list_games}
                renderItem={({ item }) => <ListGames id={item.id} title={item.title} desc={item.desc} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfaf5',
        paddingTop: '5%',
        paddingHorizontal: '5%'
    }
})

export default MainScreen;