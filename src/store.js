import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {restaurantListReducer} from './reducer/restaurantReducer'



const reducers=combineReducers({
    restaurantList:restaurantListReducer
});

const middleware = [thunk]

const store=createStore(reducers,applyMiddleware(...middleware));

export default store