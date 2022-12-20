import React from "react"
import { StyleSheet, View } from "react-native"

import progressBar from "../../util/progressBar"

const ProgressBar = (props) => {
    return (
        <View style={styles.emptyProgressBar}>
            <View style={[styles.progressBar, { width: `${progressBar(props.currentProgress || 46, props.limitProgress || 100)}%` }]} />
        </View>
    )
}

export default ProgressBar

const styles = StyleSheet.create({
    emptyProgressBar: {
        height: 4,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    progressBar: {
        height: 4,
        backgroundColor: 'rgba(0, 0, 0, 1)',
    },
})

