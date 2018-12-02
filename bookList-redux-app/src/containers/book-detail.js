import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		console.log(this.props);
		if(!this.props.book) {
			return <div>Select a Book to get started</div>
		}
		return (
			<div id="book-detail">
				<h2>Book you Selected:</h2>
				<em>{this.props.book.title}</em>
			</div>
		);
	}
}
//maps the activeBook propert of state to props.book
//the global redux state is available to container by default
function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}
//integrates redux's state management to React Application
export default connect(mapStateToProps)(BookDetail);
