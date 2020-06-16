import React,{useContext} from 'react';
import {globalContext} from '../context/globalstate';

export const Balance = () => {
    const {transactions}= useContext(globalContext);
    const amounts=transactions.map(transaction =>transaction.amount);
    const total = amounts.reduce((acc,item) =>(acc += item),0).toFixed(2);
    return (
        <>
            
            <h3>Your balance</h3>
            <h1 >${total}</h1>
        </>
    )
}
