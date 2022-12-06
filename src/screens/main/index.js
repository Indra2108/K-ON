import React from "react";
import { StyleSheet, View, FlatList } from 'react-native';

import MainHeader from "../../components/header";
import ListGames from "../../components/games_list";
import list_games from "../../assets/data/list_games";

function MainScreen() {
    return (
        <View style={styles.container}>
            <MainHeader title='Exercises.' desc="Practice daily or when you can't concentrate and you will see improvement very soon." />

            <FlatList
                data={list_games}
                renderItem={({ item }) => <ListGames id={item.id} title={item.title} desc={item.desc} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfaf5',
        paddingHorizontal: '5%'
    }
})

export default MainScreen;