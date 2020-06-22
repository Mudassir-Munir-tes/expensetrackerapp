import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
   
    title: {
      fontSize: 14,
    },
    media: {
        height: 140,
      },
    pos: {
      marginBottom: 12,
    },
  });


export const Welcomecard= () => { 


    const classes = useStyles();
    //const bull = <span className={classes.bullet}>•</span>;
  
    return(
<Card className={classes.root}>

      <CardContent>

         
        <Typography className={classes.title} style={{fontfamily:"cursive"}} color="textSecondary">
          WELCOME
        </Typography>
        
      </CardContent>
       <CardMedia className={classes.media} 
              image='https://miro.medium.com/max/2000/1*dgvVz2NJlvJEoRpfNpKuYg.jpeg'/>
          
        
    </Card>

);
}


