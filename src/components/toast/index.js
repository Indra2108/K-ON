import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const toastConfig = {
    myToast: ({ text1 }) => (
        <View style={styles.alert}>
            <Text style={styles.msg}>{text1}</Text>
        </View>
    )
}

export default toastConfig;

const styles = StyleSheet.create({
    alert: {
        backgroundColor: 'black',
        padding: '5%',
        // width: '100%',
    },
    msg: {
        color: '#fbfaf5'
    }
})