import React from "react"; 
import "../../style.scss"; 
//import {Container, Row, Col} from '@material-ui/core/styles';
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";


export default function Maintenance(){ 
    var cardStyle = {
        display: 'block',
        width: '100%',
        transitionDuration: '0.3s',
        height: '13em', 
    }  

    var cardstyle = {
        display: 'block',
        width: '50%',
        transitionDuration: '0.3s',
        height: '50%', 
    } 
    var cont={ 
        height:"13em"
    }  
    var top={ 
        
        margin:"30px"
    } 
return(
  <div className="main-container">
    <div style={ cardStyle } className="dash">  
    </div> 

    <div className="container">
    <div className="row1">  
    <Grid container spacing={100} direction="row" justify="flex-start" alignItems="flex-start"> 
 
    <Card style={cardstyle}> 
    <CardActionArea>
      <CardContent style={cont}> 
        <Typography align="center" style={top} className="top" gutterBottom variant="h5" component="h2">
          Traffic Lights
        </Typography>
        <Typography align="center" style={top} className="top" variant="body2" color="textSecondary" component="p">
          click here to view all reports on faulty traffic lights
        </Typography>
      </CardContent>
    </CardActionArea> 
</Card> 

    <Card style={cardstyle}> 
    <CardActionArea>
      <CardContent style={cont}> 
        <Typography align="center" style={top} className="top" gutterBottom variant="h5" component="h2">
          Potholes
        </Typography>
        <Typography align="center" style={top} className="top" variant="body2" color="textSecondary" component="p">
          click here to view reports made on potholes
        </Typography>
      </CardContent>
    </CardActionArea> 
</Card> 
</Grid>

    </div>
    <div className="row2">  
    <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start"> 

    <Card style={cardstyle}> 
    <CardActionArea>
      <CardContent style={cont}> 
        <Typography align="center" style={top} className="top" gutterBottom variant="h5" component="h2">
          Street Lights
        </Typography>
        <Typography align="center" style={top} className="top" variant="body2" color="textSecondary" component="p">
          click here to to veiw all reports made on faulty streetlights. 
        </Typography>
      </CardContent>
    </CardActionArea> 
</Card> 
    <Card style={cardstyle}> 
    <CardActionArea>
      <CardContent style={cont}> 
        <Typography align="center" style={top} className="top" gutterBottom variant="h5" component="h2">
          Road Blockage
        </Typography>
        <Typography align="center" style={top} className="top" variant="body2" color="textSecondary" component="p">
          click here to to view all reports made on road blockages.
        </Typography>
      </CardContent>
    </CardActionArea> 
</Card>  
</Grid>
    </div> 
    </div> 
  </div>
);
}
