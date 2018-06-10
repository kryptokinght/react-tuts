import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {term: ""};
	}

	render() {
		return (
			<div className="search-bar">
				<input
				 	value = {this.state.term} //makes it a controlled component
					onChange={event => this.setState({term: event.target.value})} />
			</div>
		);
	}

}

export default SearchBar;
