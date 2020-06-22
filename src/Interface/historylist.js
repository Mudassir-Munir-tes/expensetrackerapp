import React,{useContext} from 'react';
import {Transaction} from '../components/Transaction.js';
import {globalContext} from '../context/globalstate';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';


//import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
//import ListItemText from '@material-ui/core/ListItemText';
//import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
//mport IconButton from '@material-ui/core/IconButton';

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
 
 
 
  
  
  
  
  
export const Historylist = () => {

  

    const {transactions}= useContext(globalContext);
    const classes = useStyles();
    //const [dense, setDense] = React.useState(false);
    //const [secondary, setSecondary] = React.useState(false);
    
   

    return (
       <Grid container
       direction="column" >
        <Typography variant="h6" className={classes.title}>
            History
          </Typography>
          <div className={classes.demo}>
            <List>
                
                {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>
                    ))}
                
            

          

            </List>
          </div>
         </Grid>

    );
  }
    
