import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../../style.scss";
import { Container } from '@material-ui/core'; 
import { sizing } from '@material-ui/system';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}); 


export default function Front() {
    const classes = useStyles(); 
    var cardStyle = {
        display: 'block',
        width: '100%',
        transitionDuration: '0.3s',
        height: '13em',
    } 
    var cont={ 
        height:"13em"
    }  
    var top={ 
        
        margin:"30px"
    } 
    

  return( 
<div> 
    <div style={cardStyle} className="base-container">
    <h1>Welcome</h1>    
      
</div> 

<div>
    <Card style={cardStyle}> 
    <CardActionArea>
      <CardContent style={cont}> 
        <Typography style={top} className="top" gutterBottom variant="h5" component="h2">
          Security
        </Typography>
        <Typography style={top} className="top" variant="body2" color="textSecondary" component="p">
          click here to login if you are a road maintenance personell (people who work at roads and highways, 
          town and county planning and all other departments involved in road maintenance). 
        </Typography>
      </CardContent>
    </CardActionArea> 
</Card> 
</div>  

<div>
    <Card style={cardStyle}> 
    <CardActionArea>
      <CardContent style={cont}>
        <Typography style={top} className="top" gutterBottom variant="h5" component="h2">
          Maintenance
        </Typography>
        <Typography style={top} className="top" variant="body2" color="textSecondary" component="p">
          click here to login if you are a security personnel(the police service, fireservice, red-cross, media etc.)
        </Typography>
      </CardContent>
    </CardActionArea> 
</Card> 
</div> 
</div>
);
}