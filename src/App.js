import React from 'react';
import logo from './logo.svg';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {Incomeexpense} from './components/Incomeexpense';
import {Transactionlist} from './components/Transactionlist';
import {Addtransaction} from './components/Addtransaction';
import {GlobalProvider} from './context/globalstate';
import './App.css';
import './layout.css';

function App() {
  return (
    <GlobalProvider className="App">
      
        <img src={logo} className="App-logo" alt="logo" />
       
     <Header />
     <div className="container">
       <Balance />
        <Incomeexpense />
        <Transactionlist />
        <Addtransaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
