import { API_GET_ACTORS, API_DETACH_ACTORS, API_APPEND_ACTORS } from './types'

// axios
import axios from 'axios';
axios.$base_url = 'http://localhost:3000'


export const apiGetActors = () => dispatch => {
    axios.get(axios.$base_url + '/actors/populated')
        .then(res => dispatch({
            type: API_GET_ACTORS,
            payload: res.data
        }))
        .catch(err => {
            console.log(err)
        })
}

export const apiDetachActors = (actor, body) => dispatch => {
    axios.patch(axios.$base_url + '/actors/detach/', body)
        .then(res => dispatch({
            type: API_DETACH_ACTORS,
            payload: 
            {
                _id: actor._id,
                movies: [] || actor.movies.filter(item => item._id !== body.movieId),
                firstName: actor.firstName,
                lastName: actor.lastName,
                birthDate: '' + actor.birthDate
            }
        }))
        .catch(err => {
            console.log(err)
        })
}

export const apiAppendActors = (newMovie, actor, body) => dispatch => {
    axios.patch(axios.$base_url + '/actors/append/', body)
        .then(res => dispatch({
            type: API_APPEND_ACTORS,
            payload: 
            {
                _id: actor._id,
                movies: [...actor.movies, newMovie],
                firstName: actor.firstName,
                lastName: actor.lastName,
                birthDate: '' + actor.birthDate
            }
        }))
        .catch(err => {
            console.log(err)
        })
} 