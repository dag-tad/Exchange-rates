
import { StyleSheet, View } from 'react-native';
import env from '../config/env';
import CurrencyCard from '../components/CurrencyCard'
import CurrencyList from '../components/CurrencyList'

const CurrencyListScreen = () => {
    return(
      <View style={styles.container}>
        <CurrencyCard name="Ethiopian Birr" symbol="ETB"/>
        <CurrencyList/>
      </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default CurrencyListScreen