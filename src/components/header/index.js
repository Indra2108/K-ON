import React from "react";
import { View, Text } from 'react-native';

import styles from "./styles";

function MainHeader(props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, props.style]}>{props.title}</Text>
            {props.desc && <Text style={styles.desc}>{props.desc}</Text>}
        </View>
    )
}

export default MainHeader;