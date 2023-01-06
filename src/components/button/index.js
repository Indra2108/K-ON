import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";

import { useNavigation } from "@react-navigation/native";

const Button = (props) => {
    const navigation = useNavigation()

    return (
        <TouchableNativeFeedback onPress={() => navigation.replace(props.navigateTo)}>
            <View style={[styles.container, props.styles]}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 12,
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        fontFamily: "Mplus1-ExtraBold",
        color: '#fbfaf5',
        fontSize: 15
    }
})