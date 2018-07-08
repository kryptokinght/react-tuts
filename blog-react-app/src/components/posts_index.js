import _ from 'lodash';
import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class PostsIndex extends Component {
	//this method gets called when our Component renders
	componentDidMount() { //ORDER: (componentWillMount,render,ComponentDidMount)
		this.props.fetchPosts(); 
	}

	render() {
		return (
			<div>
				<Link className="btn btn-primary" to="/posts/new">
					Add a Post
				</Link>
				<h1>Posts</h1>
				<ul className="list-group">
					{ this.renderPosts() }
				</ul>
			</div>
		);
	}

	renderPosts() {
		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={`/posts/${post.id}`}>
						{post.title}
					</Link>
				</li>
			);
		});
	}
}

//the 'state' here is the global state of our app, the one provided by redux!!
//It is also called the APPLICATION LEVEL STATE
function mapStateToProps(state) {
	return { posts: state.posts };
}

//shortcut way of connecting our action to our component and also to the
//props of our component. We can access this.props.fetchPosts()
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
