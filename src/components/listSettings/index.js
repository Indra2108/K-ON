import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import Icon from "react-native-vector-icons/EvilIcons";

import styles from "./styles";

const ListSettings = (props) => {
    return (
        <View style={styles.container}>
            {
                props.isLevelLength ?

                    <View style={styles.containerLevelLength}>
                        <View>
                            <Text style={styles.textTitle}>{props.title}</Text>
                            <Text style={styles.textDesc}>{props.desc}</Text>
                        </View>

                        <View style={styles.containerLevelLength2}>
                            <Icon name="minus" color={'black'} size={40} />
                            <Text style={styles.textLevelLength}> {50}s </Text>
                            <Icon name="plus" color={'black'} size={40} />
                        </View>
                    </View>

                    :

                    <>
                        <Text style={styles.textTitle}>{props.title}</Text>
                        {props.desc && <Text style={styles.textDesc}>{props.desc}</Text>}
                    </>
            }
        </View>
    )
}



export default ListSettings;