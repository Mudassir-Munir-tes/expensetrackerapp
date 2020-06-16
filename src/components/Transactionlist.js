import React,{useContext} from 'react';
import {Transaction} from './Transaction';
import {globalContext} from '../context/globalstate';

export const Transactionlist = () => {

    const {transactions}= useContext(globalContext);
    //console.log(context);
    return (
        <>
            <h3>History</h3>
            <ul  className="list">
                {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>
                    ))}
                
            </ul>
        </>
    )
}
