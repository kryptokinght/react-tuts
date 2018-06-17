import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import {connect} from 'react-redux';

class PostsIndex extends Component {
	//this method gets called when our Component renders
	componentDidMount() {
		this.props.fetchPosts();
	}
	render() {
		return <div>Posts Index!</div>
	}
}

//shortcut way of connecting our action to our component and also to the
//props of our component. We can access this.props.fetchPosts()
export default connect(null, { fetchPosts })(PostsIndex);
