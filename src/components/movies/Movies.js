import React, { Component } from 'react'
import './Movies.css'

import { connect } from 'react-redux'
import { apiGetMovies, apiPostMovies, apiDeleteMovies, apiPatchMovies, apiDetachMovies, apiAppendMovies} from '../../redux/actions/moviesActions'
import { apiGetActors, apiAppendActors, apiDetachActors } from '../../redux/actions/actorsActions'

import MovieDetails from '../movie-details/MovieDetails'
import MovieAdd from '../movie-add/MovieAdd'
import MovieEdit from '../movie-edit/MovieEdit'
import MovieDetach from '../movie-detach/MovieDetach'
import MovieAppend from '../movie-append/MovieAppend'

import PropTypes from 'prop-types'

class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
          searchPhrase: '',
          runtimeStart: '',
          runtimeEnd: '',
          limitEntries: '',
          activeEditIndex: -1,
          activeDetachIndex: -1,
          activeAppendIndex: -1
        }
        this.deleteMovie = this.deleteMovie.bind(this)
        this.onChangeInput = this.onChangeInput.bind(this)
        this.filterMoviesByName = this.filterMoviesByName.bind(this)
        this.filterMoviesByRuntime = this.filterMoviesByRuntime.bind(this)
        this.blockNegativeInput = this.blockNegativeInput.bind(this)
        this.limitMovies = this.limitMovies.bind(this)
        this.moviesToDisplay = this.moviesToDisplay.bind(this)
        this.changeSelectedEdit = this.changeSelectedEdit.bind(this)
        this.changeSelectedDetach= this.changeSelectedDetach.bind(this)
        this.changeSelectedAppend= this.changeSelectedAppend.bind(this)
    }

    componentWillMount() {
      this.props.apiGetMovies()
      this.props.apiGetActors()
    }

    deleteMovie(id) {
      const confirmation = window.confirm("Press a button!")
      if (confirmation === true) {
        this.props.apiDeleteMovies(id)
      } 
    }

    changeSelectedEdit(index) {
      if (this.state.activeEditIndex === index) {
        index = -1
      }
      this.setState({
        activeEditIndex: index,
        activeDetachIndex: -1,
        activeAppendIndex: -1
      })
    }

    changeSelectedDetach(index) {
      if (this.state.activeDetachIndex === index) {
        index = -1
      }
      this.setState({
        activeDetachIndex: index,
        activeEditIndex: -1,
        activeAppendIndex: -1
      })
    }

    changeSelectedAppend(index) {
      if (this.state.activeAppendIndex === index) {
        index = -1
      }
      this.setState({
        activeAppendIndex: index,
        activeEditIndex: -1,
        activeDetachIndex: -1
      })
    }

    onChangeInput(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
    }

    blockNegativeInput(e) {
     if (e.target.value < 0) {
       e.target.value = Math.abs(e.target.value)
     }
    }

    filterMoviesByName(movieList) {
      return movieList.filter(i => i.name.toLowerCase().includes(this.state.searchPhrase.toLowerCase()))
    }

    filterMoviesByRuntime(movieList, start, end) {
        if (start === '' || end === '') return movieList
        const newSet = []
        for (const item of movieList) {
            const runtime = item.runtime
            if (runtime >= start && runtime <= end) {
                newSet.push(item)
            }
        }
        return newSet
    }

    limitMovies(movieList, index) {
      if (index === '') return movieList
      return movieList.slice(0, index)
    }

    moviesToDisplay() {
      let filtered = this.filterMoviesByName(this.props.movies, this.state.searchPhrase)
      filtered = this.filterMoviesByRuntime(filtered, this.state.runtimeStart, this.state.runtimeEnd)
      filtered = this.limitMovies(filtered, this.state.limitEntries)
      return filtered
    }

    render() {
      const headerTitle = (
        <div className="row">
            <div className="col-sm-12 text-center movie-header">
                <h1>MOVIES</h1>
            </div>
        </div>
      )
      const moviesItems = this.moviesToDisplay().map((movie, index) => (
        <div key={movie._id}>
          <MovieDetails movie={movie} />
          <button className="btn btn-danger my-button" onClick={() => this.deleteMovie(movie._id)}>Delete</button>
          <button className="btn btn-success my-button" onClick={() => this.changeSelectedEdit(index)}>Edit</button>
          <button className="btn btn-primary my-button" onClick={() => this.changeSelectedAppend(index)}>Append</button>
          <button className="btn btn-dark my-button" onClick={() => this.changeSelectedDetach(index)}>Detach</button>
          {(index === this.state.activeEditIndex) && 
          <MovieEdit movie={movie} onSubmitAction={this.props.apiPatchMovies}/>}
          {(index === this.state.activeDetachIndex) && 
          <MovieDetach movie={movie} onSubmitAction={this.props.apiDetachMovies} onSubmitSecondAction={this.props.apiDetachActors}/>}
          {(index === this.state.activeAppendIndex) &&
          <MovieAppend movie={movie} actors={this.props.actors} onSubmitAction={this.props.apiAppendMovies} onSubmitSecondAction={this.props.apiAppendActors}/>}
        </div>
      ))

      return (
        <div className="container-fluid">
          {headerTitle}
          <div className="row">
            <div className="col-md-3 movies-sidebar">
              <h4>Search Bar: </h4>
              <input value={this.state.searchPhrase} name="searchPhrase" onChange={this.onChangeInput} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <hr />
              <h4>Filter by runtime: </h4>
              <input value={this.state.runtimeStart} name="runtimeStart" onChange={this.onChangeInput} type="number" onInput={this.blockNegativeInput} className="form-control mr-sm-2" min="0" placeholder="From" />
              <input value={this.state.runtimeEnd} name="runtimeEnd" onChange={this.onChangeInput} type="number" onInput={this.blockNegativeInput} className="form-control mr-sm-2" min="0" placeholder="To" />
              <hr />
              <h4>Limit entries: </h4>
              <input value={this.state.limitEntries} name="limitEntries" onChange={this.onChangeInput} type="number" onInput={this.blockNegativeInput} className="form-control mr-sm-2" min="0" placeholder="Limit" />
              <hr />
              <MovieAdd onSubmitAction={this.props.apiPostMovies}/>
            </div>
            <div className="col-md-8 text-center">
              {moviesItems}
            </div>
          </div>
        </div>

      )
    }
  }
  

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(
    {
      _id: PropTypes.string,
      name: PropTypes.string,
      runtime: PropTypes.number,
      releaseDate: PropTypes.string,
      actors: PropTypes.array
    }
  )).isRequired,
  actors: PropTypes.array.isRequired,
  apiGetMovies: PropTypes.func.isRequired,
  apiPostMovies: PropTypes.func.isRequired,
  apiDeleteMovies: PropTypes.func.isRequired,
  apiPatchMovies: PropTypes.func.isRequired,
  apiDetachMovies: PropTypes.func.isRequired,
  apiGetActors: PropTypes.func.isRequired,
  apiAppendMovies: PropTypes.func.isRequired,
  apiAppendActors: PropTypes.func.isRequired,
  apiDetachActors: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies.items,
  actors: state.actors.items
})

export default connect(mapStateToProps, {apiGetMovies, apiPostMovies, apiDeleteMovies, apiPatchMovies, apiDetachMovies, apiGetActors, apiAppendMovies, apiAppendActors, apiDetachActors})(Movies);
  