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
					onChange = {event => this.onInputChange(event.target.value)}
				/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onInputChange(term);
	}

}

export default SearchBar;
