import convertCurrency from '../service';
import {requestApi, receiveRes, accessDenied, apiError} from './currencyActions';

function convertCurr(from,to,amt) {
    return dispatch => {
        dispatch(requestApi());
        convertCurrency(from,to,amt)
        .then(res => res)
        .then(res => {
            if(res.error) {
                throw(res.error);
            }else if(res.accessDenied){
                dispatch(accessDenied(res.accessDenied));
            }
            dispatch(receiveRes(res.data.rates[to]));
            return res.result;
        })
        .catch(error => {
            dispatch(apiError(error));
        })
    }
}

export default convertCurr;