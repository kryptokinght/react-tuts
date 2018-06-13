import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		console.log(this.props);
		if(!this.props.book) {
			return <div>Select a Book to get started</div>
		}
		return (
			<div>
				<h2>Book you Selected:</h2>
				<em>{this.props.book.title}</em>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);
