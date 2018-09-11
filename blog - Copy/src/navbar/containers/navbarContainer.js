import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/navbar/navbar';
import { getNumberOfPosts } from '../actions/actions';
import PostsService from '../services/postsService';

class NavbarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getNumberOfPosts();
        console.log(this.props);
    }

    render() {
        return (
            <Navbar numberOfPosts={this.props.numberOfPosts} />
        )
    }
}

const mapStateToProps = (state) => ({
    numberOfPosts: state.navbar.numberOfPosts
});

const mapDispatchToProps = {
    getNumberOfPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);