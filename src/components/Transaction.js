import React,{useContext} from 'react';
import {globalContext} from '../context/globalstate';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
//import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));
 

export const Transaction = ({transaction}) => {

    const { deleteTransaction }=useContext(globalContext);
    //const sign = transaction.amount < 0 ? '-' : '+'; 
    //const {transactions}= useContext(globalContext);
    //const classes = useStyles();
   
    return (
        <div>
            <List className={transaction.amount < 0 ? 'minus' : 'plus'}>
            
            
              

              <ListItem divider={true} >
            
           
            <ListItemText
                    primary={transaction.text}
                    secondary={transaction.amount}
                  />
            

            <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)} cl >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
            </ListItem>

              </List>
        </div>
    )
}
