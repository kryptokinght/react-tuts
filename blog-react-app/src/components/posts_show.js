import React, {Component} from 'react';
import fetchPost from '../actions';

class PostsShow extends Component {
    render() {
        return (
            <div>
                Posts SHow component!
            </div>
        )
    }
}

//mapStateToProps(state, ownProps)
//two arguments are passed:
//1. state: the application state
//2. ownProps: the previous props of this component
function mapStateToProps({ posts}, ownProps) {
    //ownProps.match.params.id : the match property is added to the props by react-router
    //to enable access to the params present inside the router
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);