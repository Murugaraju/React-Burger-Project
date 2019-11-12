import React,{Fragment} from 'react';
// import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

    





const PageNotFound =(props)=>{
    console.log("came in pagenot found", props)
    return (<Fragment>
        <Typography variant='h1' style={{margin:'21%'}}> PageNotFound 404 <Button onClick={()=>props.history.goBack()} variant="contained" color="secondary">Go Back</Button></Typography>
        
      </Fragment>
    )
}


export default PageNotFound;