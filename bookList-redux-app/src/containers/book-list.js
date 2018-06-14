import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map(book => {
			//action creator selectBook called when <li> clicked
			return (
				<li
					key={book.title}
					onClick={() => {this.props.selectBook(book)}}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group">
				{this.renderList()}
			</ul>
		);
	}
}

//maps the current global redux state to props
function mapStateToProps(state) {
	return {
		books: state.books
	};
}

//maps action creator selectBook() to props of <BookList>
function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
