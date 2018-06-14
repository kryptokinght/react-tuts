//controlled component
import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ""
		};
	}

	onInputChange(term) {
		console.log(term);
		this.setState({term});
	}

	render() {
		return (
			<form className="input-group">
				<input
					className="form-control"
					placeholder="Get a five-day forecast of your favourite cities"
					value={this.state.term}
					onChange={event => {this.onInputChange(event.target.value)}}
					/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}
