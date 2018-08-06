import { API_GET_ACTORS, API_DETACH_ACTORS, API_APPEND_ACTORS } from '../actions/types'

const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case API_GET_ACTORS:
            return {
                ...state,
                items: action.payload
            }
        case API_DETACH_ACTORS:
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
        case API_APPEND_ACTORS:
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