import React, { Component } from 'react';
import InputBox from './InputBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputBox text="+1" />
      </div>
    );
  }
}

export default App;
