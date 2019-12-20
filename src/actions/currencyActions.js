import { SET_FROM_CURRENCY, SET_TO_CURRENCY, 
         SET_VALUE, REQUEST_API, RECEIVE_RESPONSE,
         ACCESS_DENIED, API_ERROR, SET_HISTORY } from './types';

// Synchronous Actions
export const loadApp = () => {
    return{
        type: 'LOADING'
    }
}

export const setFromCurrency = (currency) => {
    return {
        type: SET_FROM_CURRENCY,
        currency
    }
}

export const setToCurrency = (currency) => {
    return {
        type: SET_TO_CURRENCY,
        currency
    }
}

export const setValue = (value) => {
    return {
        type: SET_VALUE,
        value
    }
}

export const setTransactionHistory = (transactions) => {
    return {
        type: SET_HISTORY,
        transactions
    }
}

// Asynchronous Actions
export const requestApi = () => ({
    type: REQUEST_API,
});
  
export const receiveRes = data => ({
    type: RECEIVE_RESPONSE,
    payload: data
});
  
export const accessDenied = url => ({
    type: ACCESS_DENIED,
    payload: {
      url
    }
  });
  
  export const apiError = error => ({
    type: API_ERROR,
    error
  });