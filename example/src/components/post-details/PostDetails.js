import React from 'react';
import './PostDetails.css';

import { truncateString } from '../../util/util'

export default (props) => {
    const body = truncateString(props.body, 200);
    
    return (
        <div className="component-post-details">
            <img src="https://via.placeholder.com/64x64" className="post-img"/>
            <div className="section">
                <span className="section__title">{props.title}</span>
                <span className="section__badge">X comments</span>
                <p className="section__body">{body}</p>
            </div> 
        </div>
    )
}
