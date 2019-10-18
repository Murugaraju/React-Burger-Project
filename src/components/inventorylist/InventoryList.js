import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
  
    root: {
      display: 'flex',
    },
    list: {
      
      [theme.breakpoints.up('md')]: {
        height: 780,
        overflowY:'scroll'
        
      },
    },


}));

function InventoryList(props) {
  let classes=useStyles()
  // console.log("printing classes ==>",classes)
  let paneData = "No Data to display";
  if (props.data !== undefined) {
    paneData = props.data.map((dt, i) => {
      return (
        <Fragment >
            
            <ListItem key={i}  button  >
          <Card key={i} raised={true} style={{width:'100%',height:'100%'}}>
            <CardContent>
              <Typography color="primary" variant="subtitle1">
                {dt.muscles[0].toUpperCase() + dt.muscles.slice(1)}
              </Typography>
            </CardContent>
            <CardActions>
             Action Empty
            </CardActions>
          </Card>
          </ListItem>
        </Fragment>
      );
    });
  }

  return (
      <Fragment>
       {/* <AppBar position="static" color='inherit' style={{paddingBottom:'12px',margin:'0px'}}> */}
      <Typography align="left" variant="h6" style={{marginTop:'13px',marginLeft:'10px'}}>
        <strong>Inventory List</strong>
      </Typography>
      {/* </AppBar>  */}
      <br/>
      <Divider />
      <List  className={classes.list}>
      {paneData}
      </List>
      </Fragment>
    
  );
};

export default InventoryList;
