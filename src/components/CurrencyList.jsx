import { Image, StyleSheet, View, FlatList, Text } from 'react-native';
import useCurrency from '../hooks/useCurrency';

const CurrencyList = () => {
    const {error, currencySymbols} = useCurrency()

    console.log(currencySymbols)
    return (
        <FlatList 
            style={styles.list}
            keyExtractor={(currency) => currency.symbol} 
            data={[...currencySymbols]} 
            renderItem={(item) => {
                    let src = require('../assets/etb.png')
                    if (item.item.symbol === 'etb'){
                            src = require('../assets/etb.png')
                    } else if(item.item.symbol === 'aud'){
                        src = require('../assets/aud.png')
                    } else if(item.item.symbol === 'aed')  {
                        src = require('../assets/aed.png')
                    }      
                    
                    return  (
                    <View style={{...styles.row, }}>
                        <View style={styles.countryIndicator}>
                            <Image style={styles.avatar} source={src}/>
                            <Text>{item.item.name}</Text>
                        </View>
                        <Text>12.021</Text>
                    </View>)
                    }
                }
            />
    )
}

const styles = StyleSheet.create({
    list: {
        marginTop: 5,
        width: '100%'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 5,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        fontSize: 16
    },
    countryIndicator: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      avatar: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 20
    }
})
export default CurrencyList