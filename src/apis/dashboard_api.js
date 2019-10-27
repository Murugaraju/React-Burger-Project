import oneinstanceaxios from '../Axios';
import store from '../storem';
import * as actionTypes from '../store/actions';
export const dashboardGet = ()=>{
    console.log("Dashsbord get initiated")
    store.dispatch({type:actionTypes.DASHBOARDGETLOADING})
    oneinstanceaxios.get('/api/dashboard')
    .then(
       (result)=>{
           console.log("get call result",result)
           store.dispatch({type:actionTypes.DASHBOARDGETSUCCESS,data:result.data})
       }
    )
return null;
}