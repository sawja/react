import React, { Component } from 'react'
import './MovieAdd.css';
import PropTypes from 'prop-types'


class MovieAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            nameError: false,
            runtime: '',
            runtimeError: false,
            releaseDate: '',
            releaseDateError: false
        }

        this.onChangeInput = this.onChangeInput.bind(this)
        this.onCallSubmit = this.onCallSubmit.bind(this)
        this.onlyLetters = this.onlyLetters.bind(this)
        this.withinRange = this.withinRange.bind(this)
        this.yearRestriction = this.yearRestriction.bind(this)
    }

    onChangeInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onCallSubmit(e) {
        e.preventDefault()

        if (!this.state.nameError || !this.state.runtimeError || !this.state.releaseDateError) {
            alert('Wprowadz poprawne dane!')
            return
        }
        const body = {
            name: this.state.name,
            runtime: this.state.runtime,
            releaseDate: this.state.releaseDate
        }
        this.props.onSubmitAction(body)
    }

    onlyLetters(e) {
        const currentValue = e.target.value
        let validity;
        //const regexp = /^[a-zA-Z]+$/
        const regexp = /^[a-zA-Z\s]*$/
        if (regexp.test(currentValue)) {
            validity = true
        } else {
            validity = false
        }
        if (currentValue === '') {
            validity = false
        }
        this.setState({
            nameError: validity
        })
    }

    withinRange(e) {
        if (e.target.value < 0) {
          e.target.value = Math.abs(e.target.value)
        }
        let validity;
        if (e.target.value >= 1 && e.target.value <= 300) {
            validity = true
        } else {
            validity = false
        }
        this.setState({
            runtimeError: validity
        })
    }

    yearRestriction(e) {
        const year = e.target.value.substring(0, 4)
        let validity
        if (year > 1900) {
            validity = true
        } else {
            validity = false
        }
        this.setState({
            releaseDateError: validity
        })
    }


    render() {
        return (
            <div className="container-fluid movie-add">
                <h4>Add a movie:</h4>
                <form name="movieForm" onSubmit={this.onCallSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input value={this.state.name} onChange={this.onChangeInput} type="text" onInput={this.onlyLetters} className="form-control" name="name" id="inputName" aria-describedby="nameValidity" placeholder="Enter name" required/>
                    <small id="nameValidity" className="form-text text-muted">Valid: {this.state.nameError.toString()}</small>
                 </div>
                 <div className="form-group">
                    <label>Runtime</label>
                    <input value={this.state.runtime} onChange={this.onChangeInput} type="number" onInput={this.withinRange} min="1" max="300" className="form-control" name="runtime" id="inputRuntime" aria-describedby="runtimeValidity" placeholder="Enter runtime" required/>
                    <small id="runtimeValidity" className="form-text text-muted">Valid: {this.state.runtimeError.toString()}</small>
                </div>
                <div className="form-group">
                    <label>Release Date</label>
                    <input value={this.state.releaseDate} onChange={this.onChangeInput} type="date" onInput={this.yearRestriction} min='1900-01-01'className="form-control" name="releaseDate" id="inputDate" aria-describedby="dateValidity" required/>
                    <small id="dateValidity" className="form-text text-muted">Valid: {this.state.releaseDateError.toString()}</small>
                </div>
                <div className="row text-center">
                    <div className="col-sm-12 text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
                </form>
            </div>  
        )
              
    }
}


MovieAdd.propTypes = {
    onSubmitAction: PropTypes.func.isRequired
} 


export default MovieAdd