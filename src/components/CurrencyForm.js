import React from 'react';
import Divider from '@material-ui/core/Divider';
import CurrencySelect from './currencySelect';
import CurrencyAmount from './currencyAmount';

const currencies = ["EUR","USD","JPY","INR","CAD"];

export default (props) => {
    console.log(props);
    return (
    <div>
        <div>
            <CurrencyAmount 
                changeAmt={props.changeAmount} id="From"
                amount={props.amount}
            />
            <CurrencySelect 
                changeCurr={props.changeFromCurr} 
                currency={props.fromCurrency}
                currencies={currencies.slice(0,1)}
            />
        </div>
        <Divider variant="middle" />
        <div>
            <CurrencyAmount 
                id="To" value={props.result}
                amount={props.result}
            />
            <CurrencySelect 
                changeCurr={props.changeToCurr} 
                currency={props.toCurrency}
                currencies={currencies}
            />
        </div>
    </div>
    )
}