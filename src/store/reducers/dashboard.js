import * as actionTypes from '../actions';


const initialState ={
    loading:false,
    inventorydata:[]
}

const dashboardReducer= (state=initialState,action)=>{
      
    switch (action.type){
        case actionTypes.DASHBOARDGETLOADING:
            return {

                ...state,
                loading:true
              
            }
        case actionTypes.DASHBOARDGETSUCCESS:
            return {
                ...state,
                inventorydata:'came'
            }
        default:
            return initialState
    }


}

export default dashboardReducer;