import oneinstanceaxios from '../Axios';
import store from '../storem';
import * as actionTypes from '../store/actions';
export const inventoryGet = ()=>{
    console.log("Inventory get initiated")
    store.dispatch({type:actionTypes.INVENTORYGETLOADING})
    oneinstanceaxios.get('/api/inventory')
    .then(
       (result)=>{
           console.log("get call inventory result",result)
           store.dispatch({type:actionTypes.INVENTORYGETSUCCESS,action:result.data})
       }
    )
return null;
}