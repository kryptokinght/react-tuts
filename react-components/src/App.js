import React, { Component } from 'react';
import InputBox from './InputBox';
import { Counter, Result } from './Counter';
import './App.css';

class App extends Component {
  state = { counter: 0 };

  incrementCounter = (delta) => {
    this.setState((prevState) => {
      return { counter: prevState.counter + delta };
    });
  }

  render() {
    return (
      <div className="App">
        <Counter incremetValue={1} onClick={this.incrementCounter} />
        <Counter incremetValue={5} onClick={this.incrementCounter} />
        <Counter incremetValue={10} onClick={this.incrementCounter} />
        <Result value={this.state.counter} />
      </div>
    );
  }
}

export default App;
