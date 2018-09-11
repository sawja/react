import React, { Component } from 'react';

import PostsService from '../services/postsService';
import Post from '../components/post/post';

class PostListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    };

    fetchPosts = () => {
        PostsService.getPosts().then(data => {
            this.setState({
                posts: data
            })
        })
    }

    fetchNumberOfComments = (id) => {
        CommentsService.getCommentsLengthById(id).then(length => {
            this.setState({
                numberOfComments: length
            });
        })
    }
    
    componentDidMount() {
        this.fetchPosts();
    }

    render() {
        const { posts } = this.state;
        return (
            posts.map(x => (   
                <Post key={x.id} post={x} fetchNumberOfComments={this.fetchNumberOfComments}/>
            ))
        )
    }
    
}

export default PostListContainer;