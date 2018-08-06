import React from 'react';
import './ActorDetails.css';

const ActorDetails = ({actor}) => {

    const moviesItems = actor.movies.map(movie => (
        <span key={movie._id}>
          {movie.name}, 
        </span>
    ))
    
    return (
        <div className="my-container">
            <div className="container-fluid actor-details">
                <div className="row">
                    <div className="col-sm-12 text-center actor-details-title">
                        {actor.firstName} {actor.lastName}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 text-center">
                        <strong>Birth Date:</strong> {actor.birthDate.substring(0, 10)}
                    </div>
                    <div className="col-sm-6 text-center">
                        <strong>Movies: </strong> 
                        {moviesItems}
                    </div>     
                </div>    
            </div>
        </div>
    )
}

ActorDetails.propTypes = {
    actor: (props, propName, componentName) => {
        const regexp = /^[a-zA-Z\s]*$/
        if (!regexp.test(props[propName].firstName)) {
            return new Error(
                'Invalid property (firstName) for prop ' + propName + ' supplied to ' + componentName
            )
        }
    }
}

export default ActorDetails