import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CurrencyListScreen from '../screens/CurrencyListScreen'
import env from '../config/env';

const CurrencyStack = createStackNavigator()

const CurrencyNavigator = props => {
    return (<NavigationContainer>
        <CurrencyStack.Navigator>
            <CurrencyStack.Screen 
                name="currencyScreen" 
                component={CurrencyListScreen}
                options={ navData => {
                    return {
                        headerTitle: env.APP_NAME
                    }
                }
                }
            />
        </CurrencyStack.Navigator>
    </NavigationContainer>)
}

export default CurrencyNavigator