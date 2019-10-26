import * as actionTypes from '../actions';


const initialState ={
    inventorydata:[]
}

const dashboardReducer= (state=initialState,action)=>{
      
    switch (action.type){
        case actionTypes.INVENTORYGET:
            return {
                ...state,

              
            }
        default:
            return initialState
    }


}

export default dashboardReducer;