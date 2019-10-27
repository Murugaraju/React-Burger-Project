import React,{Component, Fragment} from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {CardContent, Typography} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
//
import {connect} from 'react-redux';
import {dashboardGet} from '../../apis/dashboard_api';
const classes ={
    position: 'relative',
    top: '50%',
    left: '42%',
    right: '50%',
    bottom: '50%',
}

class Dashboard extends Component 
{
    componentDidUpdate(){
        console.log("Dashboar component did update")
    }
    componentDidMount(){
        console.log("Dashboar component did mount")
        dashboardGet();
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("printing",nextProps!==this.props, nextState, nextProps,this.props)
        return true
    }
    render(){
        console.log("render dashboard printed",this.props)
        return(
        
        
        <Fragment>
        <Grid container>
            
            <Grid item lg={4} md={4} style={{padding:'13px'}}>
            <Card raised style={{height: '266px'}}>
            <CardContent>
                    <Typography  variant='h4'>
                    Total Chassis:
                   </Typography>
                     <div style={classes}>
                     {this.props.dashboard.loading?<CircularProgress/> :
                    this.props.dashboard.error.isError?<p style={{color:'red'}}><strong>Error happend {this.props.dashboard.error.errordata}</strong></p>:
                    <h1>{this.props.dashboard.dashboarddata.total}</h1>
                    }
                            
                     </div>
                </CardContent>
            </Card>
            </Grid>
            <Grid item lg={4} md={4} style={{padding:'13px'}} >
            <Card raised style={{height: '266px'}}>
            <CardContent>
            <Typography  variant='h4'>
                    Used Chassis:
                   </Typography>
                     <div style={classes}>
                     {this.props.dashboard.loading?<CircularProgress/> :
                    <h1>{this.props.dashboard.dashboarddata.used}</h1>
                    }
                            
                     </div>
                </CardContent>
            </Card>
             </Grid>
            <Grid item lg={4} md={4} style={{padding:'13px'}} >
            <Card raised style={{height: '266px'}}>
            <CardContent>
                 <Typography  variant='h4'>
                    Available Chassis:
                   </Typography>
                     <div style={classes}>
                     {this.props.dashboard.loading?<CircularProgress/> :
                    <h1>{this.props.dashboard.dashboarddata.available}</h1>
                    }
                            
                     </div>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
        
        
        </Fragment>
        
        );
    };
}
const mapStateToProps=(state)=>{
    return {
        dashboard:state.Dashboard
    }
}

export default connect(mapStateToProps,null)(Dashboard);