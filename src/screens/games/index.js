import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, } from 'react-native';

import { useRoute } from "@react-navigation/native";

import { TopHeader, MainHeader } from "../../components";
import LargerNumberGame from "../../assets/games_components/01.Larger_Number";

const GamesScreen = () => {
    const route = useRoute()
    const { title, desc } = route.params
    const [startGame, setStartGame] = useState(false)

    return (
        <View style={styles.container}>
            <TopHeader
                name='close'
                color='black'
                navigateTo='MainScreen'
            />

            {
                startGame ?

                    <View style={styles.viewTextStart}>
                        <LargerNumberGame />
                    </View>

                    :

                    <>
                        <MainHeader
                            style={{ marginTop: '2%', fontSize: 30, }}
                            title={title}
                            desc={desc}
                        />
                        <TouchableWithoutFeedback onPress={() => setStartGame(true)}>
                            <View style={[styles.viewTextStart, { flex: 1, justifyContent: 'center', }]}>
                                <Text style={styles.textStart}>Start</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </>
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: '#fbfaf5',
    },
    viewTextStart: {
        flex: 1,
    },
    textStart: {
        fontFamily: "Mplus1-Bold",
        fontSize: 40,
        color: 'black',
        letterSpacing: -1,
        textAlign: 'center'
    },

})

export default GamesScreen;