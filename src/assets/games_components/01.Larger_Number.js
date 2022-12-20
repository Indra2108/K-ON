import React, { useRef, useState } from "react";
import { View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";

const LargerNumberGame = () => {
    const numberRandomizer = () => Math.floor(Math.random() * 99) + 1
    const [number1, setNumber1] = useState(numberRandomizer())
    const [number2, setNumber2] = useState(numberRandomizer())
    const totalTap = useRef(0)
    const totalCorrect = useRef(0)

    const numberGenerator = () => {
        let a = 0, b = 0

        while (a === b) {
            a = numberRandomizer()
            b = numberRandomizer()

            if (a !== b) {
                setNumber1(a)
                setNumber2(b)
                break;
            }
        }
    }

    const numberHandler = (direction) => {
        totalTap.current = totalTap.current + 1
        let largerNumber = ''

        number1 > number2 ? largerNumber = 'left' : largerNumber = 'right'

        direction === largerNumber ? totalCorrect.current = totalCorrect.current + 1 : console.log('Salah')

        numberGenerator()
        console.log(totalTap.current, 'total tap || ', totalCorrect.current, ' total correct = ', (totalCorrect.current / totalTap.current) * 100), '\%';
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => numberHandler('left')}>
                <View style={[styles.viewNumber, { flex: 10 }]}>
                    <Text style={[styles.number, { color: 'black' }]}>{number1}</Text>
                </View>
            </TouchableWithoutFeedback>

            <View style={[styles.viewNumber, { flex: 1 }]}>
                <Text style={[styles.number, { color: '#df5757' }]}>{'\u2022'}</Text>
            </View>

            <TouchableWithoutFeedback onPress={() => numberHandler('right')}>
                <View style={[styles.viewNumber, { flex: 10 }]}>
                    <Text style={[styles.number, { color: 'black' }]}>{number2}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    viewNumber: {
        justifyContent: 'center',
    },
    number: {
        fontFamily: 'Mplus1-ExtraBold',
        fontSize: 40,
        textAlign: 'center'
    }
})

export default LargerNumberGame