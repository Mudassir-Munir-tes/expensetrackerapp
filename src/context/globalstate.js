import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const intialState = {
    transactions: [
        
    ]
}

export const globalContext= createContext(intialState);

export const GlobalProvider = ({children}) =>{
    const [state,dispatch]= useReducer(AppReducer, intialState);

    function deleteTransaction(id){
        
            dispatch( {type: 'DELETE-TRANSACTION',
                       payload: id});
        
    }

    function addTransaction(transaction){
        
        dispatch( {type: 'ADD-TRANSACTION',
                   payload: transaction
                });
    
       }

    return <globalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
              {children}

    </globalContext.Provider>
}