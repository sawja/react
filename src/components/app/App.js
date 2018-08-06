// react
import React, { Component } from 'react';
// css
import './App.css';
// components
import Navigation from '../navigation/Navigation';
// redux
import { Provider } from 'react-redux';
import store from '../../redux/store/store'


class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <div>
            <Navigation />
            <hr/>
          </div>
        </Provider>
      )
    }
  }
  
 export default App;
  

