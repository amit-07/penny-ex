import { SET_FROM_CURRENCY, SET_TO_CURRENCY, 
    SET_VALUE, REQUEST_API, RECEIVE_RESPONSE,
    ACCESS_DENIED, API_ERROR, LOADING, SET_HISTORY } from '../actions/types';

export const initialState = {
    fromCurrency: 'EUR',
    toCurrency: 'USD',
    value: 1,
    result: 0.00,
    pending: false,
    error: null,
    denied: '',
    transactions: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOADING:
           return Object.assign({}, state)
        case SET_FROM_CURRENCY:
            return Object.assign({}, state,{
                fromCurrency: action.currency,
            })
        case SET_TO_CURRENCY:
            return Object.assign({}, state, {
                toCurrency: action.currency,
            })
        case SET_VALUE:
            return Object.assign({}, state, {
                value: action.value,
            })
        case SET_HISTORY:
            return Object.assign({}, state, {
                transactions: action.transactions,
            })
        case REQUEST_API:
            return Object.assign({}, state, {
                pending: true,
            })
        case RECEIVE_RESPONSE:
            return Object.assign({}, state, {
                pending: false,
                result: action.payload
            })
        case API_ERROR:
            return Object.assign({}, state, {
                pending: false,
                error: action.error
            })
        case ACCESS_DENIED:
            return Object.assign({}, state, {
                pending: false,
                denied: action.payload
            })
        default:
            return state
    }
}