import * as actionTypes from '../actions';
import {exercises} from '../../store';

const initialState ={
    loading:false,
    inventorydata:[]
}

const inventoryReducer= (state=initialState,action)=>{
      
    switch (action.type){
        case actionTypes.INVENTORYGETLOADING:
            return {
                ...state,
                loading:true,
                inventorydata:state.inventorydata.concat(exercises)
            }
        case actionTypes.INVENTORYGETSUCCESS:
        return {
            ...state,
            loading:false,
            inventorydata:state.inventorydata.concat(exercises)
        }
        default:
            return state;
    }


}

export default inventoryReducer;