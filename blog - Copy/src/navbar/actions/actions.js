import { GET_NUMBER_OF_POSTS } from './types';
import PostsService from '../services/postsService';

export const getNumberOfPosts = () => (dispatch) => {
    PostsService.getNumberOfPosts().then(data => {
        dispatch({
            type: GET_NUMBER_OF_POSTS,
            payload: {
                numberOfPosts: data
            }
        })
    });
    /*
    setTimeout(() => {dispatch({
        type: GET_NUMBER_OF_POSTS,
        payload: {
            numberOfPosts: 12
        }
    })}, 5000)
    */  
}