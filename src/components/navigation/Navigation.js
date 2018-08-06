// react
import React, { Component } from 'react';
// css
import './Navigation.css';
// components
import Movies from '../movies/Movies';
import Actors from '../actors/Actors';
// router 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Navigation extends Component {
    render() {
      return (
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="">Admin</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/movies">Movies</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/actors">Actors</Link>
                  </li>
                </ul>
              </div>
              </nav>
              <Route path="/movies" component={Movies} />
              <Route path="/actors" component={Actors} />
          </div>
      </Router>
      )
    }
  }
  
 export default Navigation;