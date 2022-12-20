import React from "react";
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import ProgressBar from "../progressBar";

const ListGames = (props) => {
    const navigation = useNavigation()

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('GamesScreen', { title: props.title, desc: props.howToPlay })}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textId}>{props.id}. </Text>
                    <Text style={styles.textTitle}>{props.title}</Text>
                </View>

                <Text style={styles.textDesc}>{props.desc}</Text>

                <ProgressBar currentProgress={10} limitProgress={100} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ListGames;