import PropTypes from 'prop-types';

export const PostPropType = PropTypes.shape(
    {
        userId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }
).isRequired