const redux = require('redux');

const createstore =redux.createStore;
// very important point to be noted all the statement execution in here are synchronous;
initialstate ={
    counter:0
}

// Reducers

const rootReducer= (state=initialstate,action)=>{
    if(action.type==='INC_COUNTER'){
        return {
            ...state,
            counter:state.counter+1
        }
    }
    if(action.type==='ADD_COUNTER'){
        return {
            ...state,
            counter:state.counter+10
        }
    }
    return state;
}

//Store

const store = createstore(rootReducer);

console.log("printing",store.getState())

// Subscription

/*
Subscription helps to execute getState() when there is a change making it not executed by manual
i.e. store.subscribe() function trigger when ever store is updated
*/

store.subscribe(()=>{
    console.log('Subscription --->',store.getState())
})

//Dispatch Action

store.dispatch({type:"INC_COUNTER"});
store.dispatch({type:"ADD_COUNTER",value:10});

console.log("After dispatch",store.getState())
