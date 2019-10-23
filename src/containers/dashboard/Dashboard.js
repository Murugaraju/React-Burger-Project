import React,{Component, Fragment} from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {CardContent, Typography} from '@material-ui/core';

class Dashboard extends Component 
{
    componentDidUpdate(){
        console.log("Dashboar component did update")
    }
    componentDidMount(){
        console.log("Dashboar component did mount")
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("printing",nextProps!==this.props, nextState, nextProps,this.props)
        return true
    }
    render(){
        console.log("render dashboard printed")
        return(
        
        
        <Fragment>
        <Grid container>
            
            <Grid item lg={4} md={4} style={{padding:'13px'}}>
            <Card raised style={{height: '266px'}}>
            <CardContent>
                    <Typography  variant="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              
                     </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item lg={4} md={4} style={{padding:'13px'}} >
            <Card raised style={{height: '266px'}}>
            <CardContent>
                    <Typography  variant="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              
                     </Typography>
                </CardContent>
            </Card>
             </Grid>
            <Grid item lg={4} md={4} style={{padding:'13px'}} >
            <Card raised style={{height: '266px'}}>
            <CardContent>
                    <Typography  variant="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              
                     </Typography>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
        
        <Grid container>
            
            <Grid item lg={4} md={4} style={{padding:'13px'}}>
            <Card raised style={{height: '266px'}}>
            <CardContent>
                    <Typography  variant="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              
                     </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item lg={4} md={4} style={{padding:'13px'}} >
            <Card raised style={{height: '266px'}}>
            <CardContent>
                    <Typography  variant="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              
                     </Typography>
                </CardContent>
            </Card>
             </Grid>
            <Grid item lg={4} md={4} style={{padding:'13px'}} >
            <Card raised style={{height: '266px'}}>
            <CardContent>
                    <Typography  variant="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              
                     </Typography>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
        
        </Fragment>
        
        );
    };
}


export default Dashboard;