import React,{Component} from 'react';
import {exercises} from '../../store';
import Grid from '@material-ui/core/Grid';
import InventoryList from '../../components/inventorylist/InventoryList';
import InventoryDetail from '../../components/inventorylist/inventorydetail/InventoryDetail';

class Inventory extends Component{


    constructor(props){
        super(props);
        this.state={
            data:exercises
        };
    }
    // console.log("printing the props ----------->",props)
    render(){
        return(
           <Grid container> 
            <Grid item xs={12} sm={4} lg={4} >
            <InventoryList data={this.state.data}/>
            </Grid>
            <Grid item xs={12} sm={8} lg={8}>
            <InventoryDetail/>
            </Grid>
           
           </Grid>
        );
    }

}



export default Inventory;