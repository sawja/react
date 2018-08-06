import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import actorsReducer from './actorsReducer'


export default combineReducers({
    movies: moviesReducer,
    actors: actorsReducer
})