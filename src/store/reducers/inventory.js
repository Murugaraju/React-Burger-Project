import * as actionTypes from '../actions';
import {exercises} from '../../store';

const initialState ={
    inventorydata:[]
}

const inventoryReducer= (state=initialState,action)=>{
      
    switch (action.type){
        case actionTypes.INVENTORYGET:
            return {
                ...state,

                inventorydata:state.inventorydata.concat(exercises)
            }
        default:
            return initialState
    }


}

export default inventoryReducer;