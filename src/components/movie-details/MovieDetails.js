import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({movie}) => {
    
    const actorsItems = movie.actors.map(actor => (
        <span key={actor._id}>
          {actor.firstName} {actor.lastName}, 
        </span>
    ))

    return (
        <div className="container-fluid movie-details">
            <div className="row movie-details-title">
                <div className="col-sm-12 text-center ">
                    <h4>{movie.name}</h4>
                </div>   
            </div>
            <div className="row">
                <div className="col-sm-4 text-center">
                    <strong>Release Date:</strong> {movie.releaseDate.substring(0,10)}
                </div>
                <div className="col-sm-4 text-center">
                    <strong>Runtime:</strong> {movie.runtime} minutes
                </div>
                <div className="col-sm-4 text-center">
                    <strong>Actors: </strong>{actorsItems}
                </div>      
            </div>
        </div>
    )
}

MovieDetails.propTypes = {
    movie: (props, propName, componentName) => {
        if (props[propName].runtime > 300 || props[propName].runtime < 0) {
            return new Error(
                'Invalid property (runtime) for prop ' + propName + ' supplied to ' + componentName
            )
        }
    }
} 

export default MovieDetails