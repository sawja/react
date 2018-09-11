import PropTypes from 'prop-types';

export default PropTypes.shape(
    {
        postId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }
).isRequired