import * as actionTypes from '../actions';


const initialState ={
    loading:false,
    dashboarddata:{}
}

const dashboardReducer= (state=initialState,action)=>{
      
    switch (action.type){
        case actionTypes.DASHBOARDGETLOADING:
            return {

                ...state,
                loading:true
              
            }
        case actionTypes.DASHBOARDGETSUCCESS:
        console.log("In dashboard api succes ",action)
            return {
                ...state,
                loading:false,
                dashboarddata:action.data,
                
            }
        default:
            return initialState
    }


}

export default dashboardReducer;