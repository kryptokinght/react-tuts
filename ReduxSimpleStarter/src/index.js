import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component
//This will produce some new HTML
const App = () => {
	return <div>Hi</div>; //JSX
}
//take this component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
