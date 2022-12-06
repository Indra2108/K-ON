import React from "react";
import { StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/EvilIcons";

const TopHeader = (props) => {
    return (
        <View style={styles.container}>
            <Icon name={props.name} size={32} color={props.color} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse'
    }
})

export default TopHeader;