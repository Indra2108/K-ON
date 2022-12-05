import React from "react";
import { View, Text } from 'react-native';

import styles from "./styles";
import ProgressBar from "react-native-progress/Bar";

const ListGames = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textId}>{props.id}. </Text>
                <Text style={styles.textTitle}>{props.title || 'Larger Number'}</Text>
            </View>
            <Text style={styles.textDesc}>{props.desc || 'Ini permainan biasa je'}</Text>
            <ProgressBar
                progress={props.progress || 0.5}
                width={null}
                height={4}
                borderRadius={0}
                borderWidth={0}
                color='rgba(0, 0, 0, 1)'
                unfilledColor='rgba(0, 0, 0, 0.3)'
            />
        </View>
    )
}

export default ListGames;