import React,{Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



// className={classes.appBar}


const PageNotFound =(props)=>{
    console.log("came in pagenot found")
    return (<Fragment>
        <AppBar position="fixed" >
        <Toolbar>
         
          <Typography variant="h6" noWrap>
            Nikhith ServerGuy
          </Typography>
          
        </Toolbar>
      </AppBar>
      <main>
          {'Go back'}
      </main>
      </Fragment>
    )
}


export default PageNotFound;