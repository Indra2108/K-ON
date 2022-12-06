import React from "react";
import { StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/EvilIcons";
import { useNavigation } from '@react-navigation/native'

const TopHeader = (props) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Icon
                name={props.name}
                color={props.color}
                size={30}
                onPress={() => navigation.navigate(props.navigateTo)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
    }
})

export default TopHeader;