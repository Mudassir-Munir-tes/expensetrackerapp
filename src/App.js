import React from 'react';
import logo from './logo.svg';
//import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {Incomeexpense} from './components/Incomeexpense';
import {Transactionlist} from './components/Transactionlist';
import {Addtransaction} from './components/Addtransaction';
import {GlobalProvider} from './context/globalstate';
import {Titlebar} from './Interface/titlebar.js';
import {Welcomecard} from './Interface/welcomecard';
import {Balancecard} from './Interface/balancecard';
import {Incomeexpensecard} from './Interface/incomeexpensecard';
import {Historylist} from './Interface/historylist';
import './App.css';
import './layout.css';

function App() {
  return (
    <GlobalProvider className="App">
       <Titlebar />
      <Welcomecard />
       
       
    
     <div className="container">
       <Balancecard />
        <Incomeexpensecard />
        <Historylist />
        <Addtransaction />
        <img src={logo} className="App-logo" alt="logo" />
     </div>
    </GlobalProvider>
     
  );
}

export default App;
