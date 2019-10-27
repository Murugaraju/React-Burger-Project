import * as actionTypes from '../actions';


const initialState ={
    loading:false,
    dashboarddata:{},
    error:{isError:false,errorData:null}
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
        case actionTypes.DASHBOARDGETFAILURE:
            return {
                ...state,
                loading:false,
                error:{isError:true,
                    errorData:action.errordata
                
                
                }

            }
        default:
            return initialState
    }


}

export default dashboardReducer;