import { legacy_createStore as createStore, combineReducers, legacy_createStore } from 'redux';
import AuthReducer from './AuthReducer'
const reducers = combineReducers({
    AuthReducer
})
const store = createStore(reducers)

export default store