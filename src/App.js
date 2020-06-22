import React from 'react';
import logo from './logo.svg';
//import {Header} from './components/Header';
//import {Balance} from './components/Balance';
//import {Incomeexpense} from './components/Incomeexpense';
//import {Transactionlist} from './components/Transactionlist';
import {Addtransaction} from './components/Addtransaction';
import {GlobalProvider} from './context/globalstate';
import {Titlebar} from './Interface/titlebar.js';
import {Welcomecard} from './Interface/welcomecard';
import {Balancecard} from './Interface/balancecard';
import {Incomeexpensecard} from './Interface/incomeexpensecard';
import {Historylist} from './Interface/historylist';
import './App.css';
import './layout.css';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  }
  
}));


function App() {
  const classes = useStyles();


  return ( 
    <div className="container" >
    <div className={classes.root}>
      <Grid
  container
  direction="column"
  spacing={3}>
    <GlobalProvider className="App">
    <Grid item >
        <Titlebar />
        </Grid>
    
    <Grid item >
    <Welcomecard />
        </Grid>
      
        <Grid item >
        <Balancecard />
        </Grid>

        <Grid item >
        <Incomeexpensecard />
        </Grid>
    
        <Grid item >
        <Historylist />
        </Grid>
       
        
        <Grid item >
        <Addtransaction />
        </Grid>
        
        <Grid item >
        <img src={logo} className="App-logo" alt="logo" />
        Developed by MUDASSIR MUNIR
        </Grid>
        
     
    </GlobalProvider>
    </Grid>
    </div>
    </div>
     
  );
}

export default App;
