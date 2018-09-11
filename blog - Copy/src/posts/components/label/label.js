import React from 'react';
import PropTypes from 'prop-types';
import style from './Label.scss';

const Label = (props) => {
    const { number, text } = props;
    let item;
    if (number > 0) {
        item = (
            <span className={style['container--red']}>{`${number} ${text}`}</span>
        )
    } else {
        item = (
            <span className={style['container--green']}>{`no ${text}`}</span>        )
    }
    return (
        <React.Fragment>
            {item}
        </React.Fragment>
    )
}
    
Label.propTypes = {
    number: PropTypes.number, 
    text: PropTypes.string
}

export default Label;