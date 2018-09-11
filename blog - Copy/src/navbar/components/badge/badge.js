import React from 'react';
import PropTypes from 'prop-types';

import style from './Badge.scss';

const Badge = (props) => (
    <span className={style.badge}>{props.number}</span>
)

Badge.propTypes = {
    number: PropTypes.number
}

export default Badge;