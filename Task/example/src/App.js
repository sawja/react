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
          data.pop(); // last element is not a post
          data = data.splice(0, 10); // just for testing purposes
          this.setState({
            posts: data,
            numberOfPosts: data.length
          })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const navbarTemplate = () => (
        <Navbar numberOfPosts={this.state.numberOfPosts}/> 
    )
    const postsTemplate = () => (
      <Posts posts={this.state.posts}/>
    )
    return (
      <div className="App">
        <Switch>
          <Route path='/' render={navbarTemplate}/>
          <Route path='/home' exact render={navbarTemplate}/>
        </Switch>
        <Route path="/posts" exact render={postsTemplate}/>
        <Route path="/posts/:id" exact render={() => (<h1>to be continued...</h1>)}/>
      </div>
    );
  }
}

export default App;