import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

const CurrencyCard = (props) => {
    return (
        <View style={styles.cardContainer}>
                <Image style={styles.avatar} source={require('../assets/etb.png')}/>
            <View>
                <Text>52.24</Text>
            <Text>{props.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 5,
        width: 125,
        height: 125,
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 15,
        marginLeft: 10
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
})
export default CurrencyCard