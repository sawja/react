import { API_GET_MOVIES, API_POST_MOVIES, API_DELETE_MOVIES, API_PATCH_MOVIES, API_DETACH_MOVIES, API_APPEND_MOVIES } from '../actions/types'

const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case API_GET_MOVIES:
            return {
                ...state,
                items: action.payload
            }
        case API_POST_MOVIES:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case API_DELETE_MOVIES:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case API_PATCH_MOVIES:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item._id !== action.payload._id) {
                        return item
                    }
                    return {
                        ...item,
                        ...action.payload
                    }
                })
            }
        case API_DETACH_MOVIES:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item._id !== action.payload._id) {
                        return item
                    }
                    return {
                        ...item,
                        ...action.payload
                    }
                })
            }
        case API_APPEND_MOVIES:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item._id !== action.payload._id) {
                        return item
                    }
                    return {
                        ...item,
                        ...action.payload
                    }
                })
            }
        default:
            return state
    }
}
