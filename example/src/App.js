import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import Posts from './components/posts/Posts';

const baseUrl = 'https://jsonplaceholder.typicode.com/'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      numberOfPosts: 0
    }
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    fetch(baseUrl + 'posts')
      .then(response => response.json())
      .then(data => {
          data.pop();
          this.setState({
            posts: data,
            numberOfPosts: data.length
          })
      });
  }

  render() {
    const renderNavbar = () => (
        <Navbar numberOfPosts={this.state.numberOfPosts}/> 
    )
    const renderPosts = () => (
      <Posts posts={this.state.posts}/>
    )
    return (
      <div className="App">
        <Switch>
          <Route path='/' render={renderNavbar}/>
          <Route path='/home' exact render={renderNavbar}/>
        </Switch>
        <Route path="/posts" exact render={renderPosts}/>
        <Route path="/posts/:id" exact render={() => (<h1>to be continued...</h1>)}/>
      </div>
    );
  }
}

export default App;