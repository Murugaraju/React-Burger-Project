import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBoxIcon from "@material-ui/icons/AccountBox"

const header = props => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography display='block' variant="subtitle1s" color="inherit">
       <strong> NIKITH INVENTORY</strong>
      </Typography>
      
      {/* <IconButton style={{marginLeft:'auto'}} edge="end" color="inherit" aria-label="button">
        < AccountBoxIcon/>
      </IconButton>  */}
    <Button style={{marginLeft:'auto'}} color="inherit"><strong>Login</strong>  < AccountBoxIcon/></Button>
   
    
    </Toolbar>
  
  </AppBar>
);

export default header;
