import React from 'react';
import {Link} from 'react-router-dom';

import './Posts.css';
import PostDetails from '../post-details/PostDetails';


export default (props) => {
    const postList = props.posts.map(x => (
        <React.Fragment key={x.id}>
            <PostDetails {...x}/>
            <Link to={'posts/' + x.id}>read more</Link>
        </React.Fragment>
    ))
    return (
        <div className="component-posts">
            <h1>Recent Posts:</h1>
            {postList}
        </div>
    )
}
