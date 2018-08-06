// react
import React, { Component } from 'react';
// css
import './MovieDetach.css';

import PropTypes from 'prop-types'


class MovieDetach extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.detachActor = this.detachActor.bind(this)
    }

    detachActor(selectedActor) {
        const body = {
            actorId: selectedActor._id,
            movieId: this.props.movie._id
        }
        
        this.props.onSubmitAction(this.props.movie, body)
        this.props.onSubmitSecondAction(selectedActor, body)
        
    }

    render() {
        const actorsItems = this.props.movie.actors.map(actor => (
            <div key={actor._id} className="row">
                <div className="col-sm-6 text-center">
                    {actor.firstName} {actor.lastName}
                </div>
                <div className="col-sm-6 text-center">
                    <button className="btn btn-secondary button-append"onClick={() => this.detachActor(actor)}>Detach</button>
                </div>
                <p>&nbsp;</p>
            </div>
        ))

        return (
            <div className="container-fluid movie-detach">
                <hr/>
                {actorsItems}
                <hr/>
            </div>
        )
    }
  }
  
MovieDetach.propTypes = {
    movie: PropTypes.object,
    onSubmitAction: PropTypes.func.isRequired,
    onSubmitSecondAction: PropTypes.func.isRequired,
} 

 export default MovieDetach;