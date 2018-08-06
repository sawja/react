import { API_GET_MOVIES, API_POST_MOVIES, API_DELETE_MOVIES, API_PATCH_MOVIES, API_DETACH_MOVIES, API_APPEND_MOVIES} from './types'

// axios
import axios from 'axios';
axios.$base_url = 'http://localhost:3000'


export const apiGetMovies = () => dispatch => {
    axios.get(axios.$base_url + '/movies/populated')
        .then(res => dispatch({
            type: API_GET_MOVIES,
            payload: res.data
        }))
        .catch(err => {
            console.log(err)
        })
}

export const apiPostMovies = (body) => dispatch => {
    axios.post(axios.$base_url + '/movies/', body)
        .then(res => dispatch({
            type: API_POST_MOVIES,
            payload: res.data.createdMovie  
        }))
        .catch(err => {
            console.log(err)
        })
}

export const apiDeleteMovies = (id) => dispatch => {
    axios.delete(axios.$base_url + '/movies/' + id)
        .then(res => dispatch({
            type: API_DELETE_MOVIES,
            payload: id
        }))
        .catch(err => {
            console.log(err)
        })
}

export const apiPatchMovies = (actorList, id, body) => dispatch => {
    axios.patch(axios.$base_url + '/movies/update/' + id, body)
        .then(res => dispatch({
            type: API_PATCH_MOVIES,
            payload: 
            {
                _id: id,
                actors: actorList,
                name: body[0].value,
                runtime: body[1].value,
                releaseDate: body[2].value
            }
        }))
        .catch(err => {
            console.log(err)
        })
}

export const apiDetachMovies = (movie, body) => dispatch => {
    axios.patch(axios.$base_url + '/movies/detach/', body)
        .then(res => dispatch({
            type: API_DETACH_MOVIES,
            payload: 
            {
                _id: movie._id,
                actors: movie.actors.filter(item => item._id !== body.actorId),
                name: movie.name,
                runtime: movie.runtime,
                releaseDate: movie.releaseDate
            }
        }))
        .catch(err => {
            console.log(err)
        })
}

export const apiAppendMovies = (newActor, movie, body) => dispatch => {
    axios.patch(axios.$base_url + '/movies/append/', body)
        .then(res => dispatch({
            type: API_APPEND_MOVIES,
            payload: 
            {
                _id: movie._id,
                actors: [...movie.actors, newActor],
                name: movie.name,
                runtime: movie.runtime,
                releaseDate: movie.releaseDate
            }
        }))
        .catch(err => {
            console.log(err)
        })
}   
