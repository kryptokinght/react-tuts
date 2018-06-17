import _ from 'lodash';
import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import {connect} from 'react-redux';

class PostsIndex extends Component {
	//this method gets called when our Component renders
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					{post.title}
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<h1>Posts</h1>
				<ul className="list-group">
					{ this.renderPosts() }
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

//shortcut way of connecting our action to our component and also to the
//props of our component. We can access this.props.fetchPosts()
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
