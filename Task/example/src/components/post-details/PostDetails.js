import React from 'react';
import { Link } from 'react-router-dom';
import './PostDetails.css';

import PropTypes from 'prop-types'
import { PostPropType } from '../../proptypes/PostPropType';
import { CommentPropType } from '../../proptypes/CommentPropType';


import { truncateString } from '../../util/strings';

const PostDetails = (props) => {
    //console.log(props.comments)
    const body = truncateString(props.post.body, 200);
    return (
        <div className="component-post-details">
            <img src="https://via.placeholder.com/64x64" alt="" className="post-img"/>
            <div className="section">
                <span className="section__title">{props.post.title}</span>
                <span className="section__badge">X comments</span>
                <p className="section__body">{body}</p>
                <Link to={'posts/' + props.post.id}>read more</Link>
            </div> 
        </div>
    )
}

PostDetails.propTypes = {
    post: PostPropType,
    comments: PropTypes.arrayOf(CommentPropType).isRequired
}


export default PostDetails;