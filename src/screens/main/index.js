import React from "react";
import { StyleSheet, View, FlatList } from 'react-native';

import SystemNavigationBar from 'react-native-system-navigation-bar';

import { ListGames, MainHeader, TopHeader } from "../../components";
import list_games from "../../assets/data/list_games";

// useEffect(() => SystemNavigationBar.setNavigationColor('light'), [])

function MainScreen() {
    SystemNavigationBar.setNavigationColor('#fbfaf5', 'dark');

    return (
        <View style={styles.container}>
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