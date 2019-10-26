import {createStore,combineReducers} from 'redux';

import InventoryReducer from './store/reducers/inventory';
import DashboardReducer from './store/reducers/dashboard';

const rootReducer =combineReducers( {
    Dashboard:DashboardReducer,
    Inventory:InventoryReducer
})

const store = createStore(rootReducer)


export default store;