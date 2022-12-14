import React from "react";
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import ProgressBar from "react-native-progress/Bar";

import styles from "./styles";

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
                <ProgressBar
                    progress={props.progress || 0.1}
                    width={null}
                    height={4}
                    borderRadius={0}
                    borderWidth={0}
                    color='rgba(0, 0, 0, 1)'
                    unfilledColor='rgba(0, 0, 0, 0.3)'
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ListGames;