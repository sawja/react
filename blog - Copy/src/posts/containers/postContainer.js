import React, { Component } from 'react';
import CommentsService from '../services/commentsService';
import PropTypes from 'prop-types';
import PostPropType from '../proptypes/postPropType';
import Post from '../components/post/post';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfComments: 1
        };
    }

    componentDidMount() {
        this.fetchNumberOfComments();
    }

    fetchNumberOfComments = () => {
        CommentsService.getCommentsLengthById(this.props.post.id).then(length => {
            this.setState({
                numberOfComments: length
            });
        })
    }

    render() {
        const { numberOfComments } = this.state;
        return (
            <Post post={this.props.post} numberOfComments={numberOfComments}/>
        )
    }
}

PostContainer.propTypes = {
    post: PostPropType
}


export default PostContainer;