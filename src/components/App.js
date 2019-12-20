import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as currencyActions from '../actions/currencyActions';
import convertCurr from '../actions/convertAction';
import './App.css';
import CurrencyForm from './CurrencyForm';
import Transactions from './Transactions';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.setLoading();
  }

  componentDidMount(){
    this.convert();
  }

  changeFromCurr = (event) => {
    this.props.setFromCurrency(event.target.value);
  }

  changeToCurr = (event) => {
    this.props.setToCurrency(event.target.value);
  }

  changeAmount = (event) => {
    this.props.setValue(event.target.value);
  }

  convert = () => {
    return this.props.convertCurr(this.props.fromCurrency,this.props.toCurrency,this.props.value);
  }
  
  checkForUpdates = (prevProps, currentProps) => {
    return (prevProps !== currentProps) ? true : false;
  }
  componentDidUpdate(prevProps, prevState) {
    let obj = {from: prevProps.fromCurrency, to: prevProps.toCurrency, amt: prevProps.value, res:prevProps.result};
    
    if (this.checkForUpdates(prevProps.toCurrency, this.props.toCurrency)) {
      this.props.transactions.push(obj);
      this.props.setTransactionHistory(this.props.transactions);
      this.convert();
    }else if(this.checkForUpdates(prevProps.value, this.props.value)){
      this.convert();
    }
  }

  render() {
    const {fromCurrency, toCurrency, value, result, pending, transactions} = this.props;
    return (
      <div>
        <CurrencyForm
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          amount={value}
          changeFromCurr={this.changeFromCurr}
          changeToCurr={this.changeToCurr}
          changeAmount={this.changeAmount}
          result={pending ? `Converting` : value*result}
        />
        <Transactions transactions={transactions} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fromCurrency: state.currency.fromCurrency,
    toCurrency: state.currency.toCurrency,
    value: state.currency.value,
    result: state.currency.result,
    transactions: state.currency.transactions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: () => dispatch(currencyActions.loadApp()),
    setFromCurrency: currency => dispatch(currencyActions.setFromCurrency(currency)),
    setToCurrency: currency => dispatch(currencyActions.setToCurrency(currency)),
    setValue: value => dispatch(currencyActions.setValue(value)),
    convertCurr: (fromCurrency,toCurrency,value) => dispatch(convertCurr(fromCurrency,toCurrency,value)),
    setTransactionHistory: (transactions) => dispatch(currencyActions.setTransactionHistory(transactions))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
