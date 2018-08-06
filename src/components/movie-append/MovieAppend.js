// react
import React, { Component } from 'react';
// css
import './MovieAppend.css';

import PropTypes from 'prop-types'


class MovieAppend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.appendActor = this.appendActor.bind(this)
    }

    appendActor(selectedActor) {
        const body = {
            actorId: selectedActor._id,
            movieId: this.props.movie._id
        }

        this.props.onSubmitAction(selectedActor, this.props.movie, body)
        this.props.onSubmitSecondAction(this.props.movie, selectedActor, body)
    }

    filteredActors() {
        const actorIdArray = this.props.movie.actors.map(item => {
            return item._id
        })
        const filtered = this.props.actors.filter(item => {
            if (actorIdArray.includes(item._id)) {
                return false
            }
            return true
        })
        return filtered
    }

    render() {
        const actorsItems = this.filteredActors().map(actor => (
            <div key={actor._id} className="row">
                <div className="col-sm-6 text-center">
                    {actor.firstName} {actor.lastName}
                </div>
                <div className="col-sm-6 text-center">
                    <button className="btn btn-info button-append"onClick={() => this.appendActor(actor)}>Append</button>
                </div>
                <p>&nbsp;</p>
            </div>
        ))

        return (
            <div className="container-fluid movie-append">
                <hr/>
                    {actorsItems}
                <hr/>
            </div>
        )
    }
  }


MovieAppend.propTypes = {
    movie: PropTypes.object,
    onSubmitAction: PropTypes.func.isRequired,
    onSubmitSecondAction: PropTypes.func.isRequired,
    actors: PropTypes.array.isRequired
} 
  
 export default MovieAppend;