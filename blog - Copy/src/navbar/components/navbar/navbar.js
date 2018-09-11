import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Navbar.scss';
import Badge from '../badge/badge';

const Navbar = (props) => {
    const { numberOfPosts } = props;
    return (
        <div className={style.nav}>
            <Link to="/home" className={style['nav__title']}>Blog App</Link>
            <ul className={style['nav__list']}>
                <li className={style['nav__list__item']}>
                    <Link to="/posts" className={style['nav__list__item__link']}>Posts</Link>
                    <Badge number={numberOfPosts}/>
                </li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    numberOfPosts: PropTypes.number
};

export default Navbar;