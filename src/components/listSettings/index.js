import React, { useState } from "react";
import { View, Text } from 'react-native';

import Icon from "react-native-vector-icons/EvilIcons";
import Toast from 'react-native-toast-message';

import styles from "./styles";

const ListSettings = (props) => {
    const [seconds, setSeconds] = useState(50)

    const levelLengthHandler = (action) => {
        switch (action) {
            case 'plus':
                if (seconds >= 300) {
                    Toast.show({
                        text1: 'Maximum round length is 5 minutes.',
                    });
                } else {
                    setSeconds(seconds + 10)
                }
                break;
            case 'minus':
                if (seconds <= 50) {
                    Toast.show({
                        text1: 'Minimum round length is 50 seconds.',
                    });
                } else {
                    setSeconds(seconds - 10)
                }
                break;
            default:
                break;
        }
    }

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
                            <Icon name="chevron-left" color={'black'} size={38} onPress={() => levelLengthHandler('minus')} />
                            <Text style={styles.textLevelLength}> {seconds}s </Text>
                            <Icon name="chevron-right" color={'black'} size={38} onPress={() => levelLengthHandler('plus')} />
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