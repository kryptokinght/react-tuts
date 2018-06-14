//controlled component
import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ""
		};
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();
		//fetch weather data
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					className="form-control"
					placeholder="Get a five-day forecast of your favourite cities"
					value={this.state.term}
					onChange={this.onInputChange}
					/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}
