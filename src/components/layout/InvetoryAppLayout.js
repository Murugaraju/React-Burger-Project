import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Readermode from '@material-ui/icons/ChromeReaderMode';
import Dashboardd  from '@material-ui/icons/Dashboard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Button from "@material-ui/core/Button";
import {NavLink}  from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    paddingTop: theme.spacing(1)
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles(); 
  const theme = useTheme();
  const [stateResponsiveDrawer, setMobileOpen] = React.useState({mobileOpen:false,selectedone:'dashboard'});
    // console.log("printing classes from makeStyles",classes)


  // below const for button icon storge
  const iconcomponentob={dashboard:<Dashboardd/>,
                        inventory:<Readermode/>  }  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState)=>{ return {...prevState,mobileOpen:!prevState.mobileOpen}});
    // setMobileOpen({...stateResponsiveDrawer, mobileOpen:!stateResponsiveDrawer.mobileOpen})
  };

  
  console.log("this is ",props.history)

  // selected ={text.toLowerCase()===stateResponsiveDrawer.selectedone}
  
  const drawer = (
    <div>
      <div className={classes.toolbar} ><Typography variant="h6" color="inherit" style={{marginLeft:'21px',paddingTop:'5px'}}>HPE Inventory</Typography>
      <Typography variant="caption" color="inherit" style={{marginLeft:'21px'}}>Menu</Typography>
      </div>
      <Divider />
      <Divider />
      <List>
        {['Dashboard', 'Inventory'].map((text, index) => (
          // <Link to={text.toLowerCase()}>
         
          <ListItem component={NavLink} to={text.toLowerCase()} activeClassName="Mui-selected" button key={text} >
            <ListItemIcon>{iconcomponentob[text.toLowerCase()]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          
          // </Link>
        ))}
      </List>
      
    </div>
  );
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Nikhith ServerGuy
          </Typography>
          <Button style={{marginLeft:'auto'}} color="inherit"><strong>Login</strong>  < AccountBoxIcon/></Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders" >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={stateResponsiveDrawer.mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        
        {props.children}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;
