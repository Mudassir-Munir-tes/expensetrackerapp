import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import {globalContext} from '../context/globalstate';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

export const Incomeexpensecard = () => {


    const {transactions}= useContext(globalContext);
    const amounts=transactions.map(transaction =>transaction.amount);

    const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc += item),0).toFixed(2);

    const expense = (amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0)* -1).toFixed(2);

    const classes = useStyles();
    

    return (
        <Card style={{backgroundColor:"purple"}} className={classes.root}>
            <CardContent>
            <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
           <p  className="money plus">{income}</p>
            </div>

            <div>
                <h4>Expense</h4>
                <p  className="money minus">{expense}</p>
            </div>
            
        </div>

            </CardContent>
        </Card>
        
    )
}
