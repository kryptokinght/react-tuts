import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBapyhL7mIy-nT64WAiXf0uTdHxCsWg_mM';

//Create a new component
//This will produce some new HTML
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {videos: []};
		YTSearch({key: API_KEY, term: "Apple"}, videos => {
			this.setState({videos})
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}

}
//take this component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
