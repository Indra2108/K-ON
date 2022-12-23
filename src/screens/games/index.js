import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, } from 'react-native';

import { useRoute, useNavigation } from "@react-navigation/native";

import { TopHeader, MainHeader } from "../../components";
import LargerNumberGame from "../../assets/games_components/01.Larger_Number";

const GamesScreen = () => {
    const { title, desc } = useRoute().params
    const navigation = useNavigation()
    const [startGame, setStartGame] = useState(false)
    const [time, setTime] = useState(5)
    const minute = Math.floor(time % 3600 / 60)
    const second = Math.floor(time % 3600 % 60)
    const timerRef = useRef(time)

    useEffect(() => {
        if (startGame) {
            const timerId = setInterval(() => {
                timerRef.current -= 1
                if (timerRef.current < 0) {
                    clearInterval(timerId)
                } else {
                    setTime(timerRef.current)
                }

                if (timerRef.current < 0) {
                    navigation.replace('ResultScreen')
                }
                console.log('TimeREF: ',timerRef.current);
                console.log('time: ',time);
            }, 1000);
        }

        // return () => clearInterval(timerId)
    }, [startGame])

    return (
        <View style={styles.container}>
            <TopHeader
                name='close'
                color='black'
                navigateTo='MainScreen'
            />

            {
                startGame ?
                    <>
                        <Text style={[styles.textStart, { fontSize: 25 }]}>{minute > 0 ? "0" + minute : "00"}:{second > 0 ? (second > 9 ? second : "0" + second) : "00"}</Text>
                        <View style={styles.viewTextStart}>
                            <LargerNumberGame />
                        </View>
                    </>

                    :

                    <>
                        <MainHeader
                            style={{ marginTop: '2%', fontSize: 30, }}
                            title={title}
                            desc={desc}
                        />
                        <TouchableWithoutFeedback onPress={() => setStartGame(true)}>
                            <View style={[styles.viewTextStart, { flex: 1, justifyContent: 'center', }]}>
                                <Text style={[styles.textStart, { fontSize: 40 }]}>Start</Text>
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
        color: 'black',
        letterSpacing: -1,
        textAlign: 'center',
    },

})

export default GamesScreen;