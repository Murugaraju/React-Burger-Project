import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import asd from '@material-ui/icons/'

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";


const pane = props => {
  let paneData = "Not Selected";
   

  return (
    <Paper style={{width:"100%",height:"100%",margin:"auto"}}>
        <Card raised style={{height:"90%",margin:"10px"}}>
            <CardContent>
                <Typography align="center" variant="subtitle2">
                <strong>Inventory Details</strong>
                 </Typography>
            </CardContent>
        </Card>
      
      
     
    </Paper>
  );
};

export default pane;
