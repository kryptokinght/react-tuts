import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchPost, deletePost} from '../actions';

class PostsShow extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    onDeleteClick() {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        }); //call deletePost() action creator alongwith a goto homepage callback
    }

    render() {
        const { post } = this.props;
        if(post === undefined)
            return (
                <div>
                    <Link to="/">Back To Home</Link>
                    <h3>Loading...</h3>
                </div>
            );
        else
            return (
                <div>
                    <Link to="/">Back To Home</Link>
                    <button 
                    className="btn btn-danger float-right" onClick={this.onDeleteClick.bind(this)}
                    >
                        Delete Post
                    </button>
                    <h3>{post.title}</h3>
                    <h6>Categories: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            );
    }
}

//mapStateToProps(state, ownProps)
//two arguments are passed:
//1. state: the application state
//2. ownProps: the previous props of this component
function mapStateToProps({ posts }, ownProps) {

    //ownProps.match.params.id : the match property is added to the props by react-router
    //to enable access to the params present inside the router
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);