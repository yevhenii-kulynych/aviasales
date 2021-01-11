import axios from "axios";
import { FETCH_CURRENCY_RATES } from '../types/currencyTypes';

export const getCurrencyRates = data => {
    
  return {
    type: FETCH_CURRENCY_RATES,
    payload: data
  }
}
  
export const getCurrencyRatesAsync = () => {
  
  return dispatch => {
  
    axios.get('https://api.exchangeratesapi.io/latest?base=RUB')
      .then(data => {

        dispatch(getCurrencyRates(data.data.rates))
    })
  }
}