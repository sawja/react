import React, { Component } from 'react';
import './Actors.css';

import { connect } from 'react-redux'
import { apiGetActors } from '../../redux/actions/actorsActions'
import ActorDetails from '../actors-details/ActorDetails';

import PropTypes from 'prop-types'


class Actors extends Component {

  componentWillMount() {
    this.props.apiGetActors()
  }

  render() {
    const headerTitle = (
      <div className="row">
          <div className="col-sm-12 text-center actor-header">
              <h1>ACTORS</h1>
          </div>
      </div>
    )

    const actorsItems = this.props.actors.map(actor => (
      <div key={actor._id}>
        <ActorDetails actor={actor} />
      </div>
    ))
    return (
        <div>
          {headerTitle}
          {actorsItems}
        </div>
    )
  }
}
  
Actors.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.shape(
    {
      _id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      birthDate: PropTypes.string,
      movies: PropTypes.array
    }
  )).isRequired,
  apiGetActors: PropTypes.func.isRequired
} 

const mapStateToProps = state => ({
  actors: state.actors.items
})

export default connect(mapStateToProps, {apiGetActors})(Actors);