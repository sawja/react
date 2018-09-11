import { combineReducers } from 'redux'
import navbarReducer from './navbar/reducers/reducers';


export default combineReducers({
    navbar: navbarReducer
})