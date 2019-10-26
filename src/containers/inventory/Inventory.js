import React,{Component} from 'react';
import {exercises} from '../../store';
import Grid from '@material-ui/core/Grid';
import InventoryList from '../../components/inventorylist/InventoryList';
import InventoryDetail from '../../components/inventorylist/inventorydetail/InventoryDetail';
import store from '../../storem';
import {inventoryGet} from '../../apis/inventory_api';
//react-redux
import * as actionTypes from '../../store/actions';
import CircularProgress from '@material-ui/core/CircularProgress';

import {connect} from 'react-redux';
class Inventory extends Component{


    constructor(props){
        super(props);
        this.state={
            data:exercises
        };
    }
    componentDidMount(){
        // this.props.inventorygetcall() 
        inventoryGet()

        
           
    }
    
    render(){
        console.log("printing the props ----------->",this.props)
        return(
           
           <Grid container> 
            <Grid item xs={12} sm={4} lg={4} >
            {this.props.inventory.loading===false?<InventoryList data={this.props.inventory.inventorydata}/>
            :<CircularProgress/>
            }
            
            </Grid>
            <Grid item xs={12} sm={8} lg={8}>
            <InventoryDetail/>
            </Grid>
           
           </Grid>
        );
    }

}
const mapStateToProps =(state)=>{
    console.log("state from reducer",state)
    return {
        inventory:state.Inventory
    }
}

// const mapDispatchToProps =(dispatch)=>{
//     return{   
//         inventorygetcall:()=>dispatch({type:actionTypes.INVENTORYGET})
//     }
// }


export default connect(mapStateToProps,null)(Inventory);
//if don't want state
//export default connect(null,mapDispatchToProps)(Inventory);

