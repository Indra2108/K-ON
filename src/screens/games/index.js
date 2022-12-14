import React from "react";
import { StyleSheet, View } from 'react-native';

import { useRoute } from "@react-navigation/native";

import { TopHeader, MainHeader } from "../../components";

const GamesScreen = () => {
    const route = useRoute()
    const { title, desc } = route.params

    return (
        <View style={styles.container}>
            <TopHeader
                name='close'
                color='black'
                navigateTo='MainScreen'
            />

            <MainHeader
                style={{ marginTop: '2%', fontSize: 30, }}
                title={title}
                desc={desc}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: '#fbfaf5',
    },
})

export default GamesScreen;