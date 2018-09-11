import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostListContainer from './posts/containers/PostListContainer';

export default () => (
    <React.Fragment>
        <Switch>        
            <Route path='/' render={() => (<h1></h1>)}/>
            <Route exact path='/home' render={() => (<h1>HOME!</h1>)}/>
        </Switch>
        <Switch>
            <Route exact path='/posts' component={PostListContainer}/>
            <Route exact path="/posts/:id"  render={() => (<h1>to be continued...</h1>)}/>
        </Switch>
    </React.Fragment>
);