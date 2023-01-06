import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/EvilIcons";

import { Button, MainHeader, TopHeader } from "../../components";
import normalize from "../../util/normalize";

const ResultScreen = () => {
    // const { title } = useRoute().params

    const TotalResult = (props) => {
        return (
            <>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <Text style={[styles.text1, { fontSize: normalize(16) }]}>{props.title}</Text>
                    <Text style={[styles.text1, { fontSize: normalize(21) }]}>{props.result}</Text>
                </View>
                <Text style={styles.text2}>The minimum limit for passing is {props.minresult}</Text>
            </>
        )
    }

    return (
        <View style={styles.container}>
            <TopHeader name='close' color='black' navigateTo='MainScreen' />

            <MainHeader
                style={{ fontSize: 38 }}
                title='Result'
                desc={'Larger number'}
            />

            <View style={{ marginTop: '10%' }}>
                <TotalResult title='Percentage of correct answers:' result={'100%'} minresult='90%' />

                <TotalResult title='The number of rounds played:' result={90} minresult='90' />
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Icon
                    name='star'
                    color='black'
                    size={110}
                />

                <Text style={[styles.text1, { fontSize: 17 }]}>Great! You got</Text>
                <Text style={[styles.text1, { fontSize: 17, }]}>a star for this try.</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <Button title='Go to menu' navigateTo='MainScreen' styles={{ width: '48%', }} />
                <Button title='Repeat' navigateTo='MainScreen' styles={{ width: '48%' }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: '#fbfaf5',
    },
    text1: {
        fontFamily: "Mplus1-ExtraBold",
        color: 'black',
    },
    text2: {
        fontFamily: "Mplus1-Light",
        fontSize: 14,
        color: 'black',
    }
})

export default ResultScreen