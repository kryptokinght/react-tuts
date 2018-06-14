import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from '../api_keys/keys';

//Create a new component
//This will produce some new HTML
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term:"",
			videos: [],
			selectedVideo: null
		};
		this.searchTerm("Ibiza");
	}

	render() {
		const searchTerm = _.debounce(term => {this.searchTerm(term)}, 300);
		return (
			<div>
				<SearchBar onInputChange= {searchTerm}/>
				<div className="row">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList
						onVideoSelect= {selectedVideo => {this.setState({selectedVideo}) }}
						videos= {this.state.videos}
					/>
				</div>
			</div>
		);
	}

	searchTerm(term) {
		YTSearch({key: API_KEY, term: term}, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		});
	}
}
//take this component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.app'));
