import SearchBar from './components/search_bar';
import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBapyhL7mIy-nT64WAiXf0uTdHxCsWg_mM';


//Create a new component
//This will produce some new HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}
//take this component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
