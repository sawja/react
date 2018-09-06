import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

export default (props) => {
    return (
        <div className="component-navbar">
            <Link to="/home" className="nav-link">Blog app</Link>
            <ul className="nav-list">
                <li className="nav-list__item">
                    <Link to="/posts" className="nav-link">Posts</Link>
                    <span>{props.numberOfPosts}</span>
                </li>
            </ul>
        </div>
    )
}
