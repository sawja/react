import React from 'react';
import PostContainer from '../../containers/postContainer';
import PropTypes from 'prop-types';
import PostPropType from '../../proptypes/postPropType';

const PostList = (props) => (
    props.posts.map(post => (   
        <PostContainer key={post.id} post={post}/>
    ))
)

PostList.propTypes = {
    posts: PropTypes.arrayOf(PostPropType).isRequired
}

export default PostList;