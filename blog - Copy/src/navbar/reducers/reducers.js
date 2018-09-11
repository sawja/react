import { GET_NUMBER_OF_POSTS } from '../actions/types';

const initialState = {
    numberOfPosts: 0
};

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case GET_NUMBER_OF_POSTS: {
            return {
                ...state,
                numberOfPosts: action.payload.numberOfPosts
            }
        }
        default: {
            return state
        }
    }
}

export default reducers;