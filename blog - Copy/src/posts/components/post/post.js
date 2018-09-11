import React from 'react';
import { Link } from 'react-router-dom';
import style from './Post.scss';
import { truncateString } from '../../util/strings';
import PostPropType from '../../proptypes/postPropType';
import PropTypes from 'prop-types';
import Label from '../label/label';

const Post = (props) => {
    const { post, fetchNumberOfComments } = props;

    const body = truncateString(post.body, 100);
    return (
        <div className={style.post}>
            <img src="https://via.placeholder.com/64x64" alt="" className={style.post__img}/>
            <div className={style['post__section']}>
                <span className={style['post__section__title']}>{post.title}</span>
                <Label number={2} text="comments"/>
                <p className={style['post__section__body']}>{body}</p>
                <Link to={'posts/' + post.id} className={style.post__section__link}>read more</Link> 
            </div>
        </div>
    )
}

Post.propTypes = {
    post: PostPropType,
    fetchNumberOfComments: PropTypes.func.isRequired
}

export default Post;