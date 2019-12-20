import React from 'react';

export default (props) => {
    console.log(props);
    return(
        <div className={`transactionList`}>
            <h4>Transaction History</h4>
            <ul>
                {
                props.transactions.map((item,idx) => {
                    return <li key={idx}>From : {item.from} To: {item.to} Amount: {item.amt} Result: {item.amt*item.res}</li>
                })
                }
            </ul>
        </div>
    )
}