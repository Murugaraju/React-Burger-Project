import React,{Component} from 'react';
import {muscles,exercises} from '../../store';
import Grid from '@material-ui/core/Grid';
import LeftPane from '../../components/layout/LeftPane';
import RightPane from '../../components/layout/RightPane';

class Inventory extends Component{


    constructor(props){
        super(props);
        this.state={
            data:exercises
        };
    }

    render(){
        return(
           <Grid container> 
            <Grid item xs={12} sm={4} lg={4}>
            <LeftPane data={this.state.data}/>
            </Grid>
            <Grid item xs={12} sm={8} lg={8}>
            <RightPane/>
            </Grid>
           
           </Grid>
        );
    }

}



export default Inventory;