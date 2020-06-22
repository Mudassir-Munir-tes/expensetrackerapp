import React, {useState, useContext} from 'react';
import {globalContext} from '../context/globalstate';

export const Addtransaction = () => {

    let [text,setText]=useState('');
    let [amount,setAmount]=useState(0);
     
    const { addTransaction }=useContext(globalContext);

    const onSubmit= e =>{
        e.preventDefault();
       
    
        const newTransaction={ id: Math.floor(Math.random() * 10000000),
                               text,
                               amount: +amount   }

        addTransaction(newTransaction);
        setAmount("");
        setAmount("");
    
                              
    }

   


    return (
        <div>
            <h3>Add new Transaction</h3>
            <form onSubmit={onSubmit}> 
                <div  className="form-control">
                    <label htmlFor="text">Text</label>
                  <input type="text" id="mytext" onfocus="this.value=''" value={text} onChange={(e) =>{setText(e.target.value)}}
                   placeholder="Enter text..."  required></input>
                </div>

                <div  className="form-control">
                    <label htmlFor="amount">Amount<br />
                    (negative-expense, positive-income)</label>
                  <input type="number"  id="amount" value={amount} onChange={(e) =>{setAmount(e.target.value)}}
                  placeholder="Enter amount..." required></input>
                </div>
                
                <button  className="btn">Add transaction</button>
            </form>
        </div>
    )
}
