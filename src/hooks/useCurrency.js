import React, {useState, useEffect} from 'react'
import exApi from '../api/exApi'
import env from '../config/env';

const useCurrency = () => {
    const [currencySymbols, setCurrencySymbols] = useState([])
    const [error, setError] = useState()

    const endPoint = 'symbols'
    
    const toCurrency = (strCurrency) => {
        const symbols = []

        for(let i = 0; i < strCurrency.length; i++){
            symbols.push({
                symbol: strCurrency[i][0],
                name: strCurrency[i][1],
            })
        }

        setCurrencySymbols(symbols)
    }
    const fetchData = () => {
        try{
            exApi.get(endPoint).then(response => {
                const data = Object.entries(response.data.symbols)
                toCurrency(data)
            }).catch(err => {
                setError(err.response) 
                console.log(err.response)
            })
        } catch(err){
            console.log(err)
        }
    }
    useEffect( () =>{
        fetchData()
    }, [endPoint])
    return {error, currencySymbols}
}

export default useCurrency