import React, { Component } from 'react';

import './Posts.css';
import PostDetails from '../post-details/PostDetails';

import PropTypes from 'prop-types'
import  { PostPropType } from '../../proptypes/PostPropType';

const baseUrl = 'https://jsonplaceholder.typicode.com/'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: {}
        }
        this.fetchComments = this.fetchComments.bind(this);
    }

    componentDidMount() {
        //console.log('mounting...');
        if (this.props.posts.length === 0) {
            this.fetchComments();
        }
    }
    
    componentDidUpdate(prevProps) {
        //console.log('updating...')
        if (prevProps !== this.props) {
            this.fetchComments();
        }
    }

    fetchComments() {
        const fetchPromises = this.props.posts.map(post => {
            return fetch(`${baseUrl}comments?postId=${post.id}`).then(response => response.json())
        })
        Promise.all(fetchPromises).then(data => {
            console.log(data);
        })

        //console.log('len = ' + this.props.posts.length)
        /*
        const result = {};
        for (const post of this.props.posts) {
            fetch(`${baseUrl}comments?postId=${post.id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(post.id);
                    result[post.id] = data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
        // console.log(result)
        this.setState({
            comments: result
        })
        */
    }

    render() {
        //console.log(Object.keys(this.state.comments))
        const postList = this.props.posts.map(post => (   
            <PostDetails key={post.id} post={post} comments={[]}/>
        ))
        /* 
        // if multiple elements use Fragment to avoid wrapper
        const postList = this.props.posts.map(post => (
            <React.Fragment key={post.id}>
                <PostDetails post={post} comments={[]}/>
                <div>
            </React.Fragment>
        ))
        */
        
        return (
            <div className="component-posts">
                <button onClick={() => console.log(this.state.comments)}>klik</button>
                <h1>Recent Posts:</h1>
                {postList}
            </div>
        ) 
    }
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(PostPropType).isRequired
}


export default Posts;


