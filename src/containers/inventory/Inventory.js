import React,{Component} from 'react';
import {exercises} from '../../store';
import Grid from '@material-ui/core/Grid';
import InventoryList from '../../components/inventorylist/InventoryList';
import InventoryDetail from '../../components/inventorylist/inventorydetail/InventoryDetail';
//react-redux
import * as actionTypes from '../../store/actions';
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
    }
    
    render(){
        console.log("printing the props ----------->",this.props)
        return(
           
           <Grid container> 
            <Grid item xs={12} sm={4} lg={4} >
            <InventoryList data={this.props.inventory.inventorydata}/>
            </Grid>
            <Grid item xs={12} sm={8} lg={8}>
            <InventoryDetail/>
            </Grid>
           
           </Grid>
        );
    }

}
const mapStateToProps =(state)=>{
    return {
        inventory:state.Inventory
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{   
        inventorygetcall:()=>dispatch({type:actionTypes.INVENTORYGET})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Inventory);
//if don't want state
//export default connect(null,mapDispatchToProps)(Inventory);

