import React, { Component } from 'react';
import Droppable from 'droppable';
import InputBox from '../InputBox';
import { Counter, Result } from '../Counter';
import './App.css';

class App extends Component {
  state = { counter: 0 };

  incrementCounter = (delta) => {
    this.setState((prevState) => {
      return { counter: prevState.counter + delta };
    });
  }

  render() {
    let i = 0;
    return (
      <div className="App">
        <div id="my-droppable-element">Drop Here</div>
        <div id="counter-buttons">
          <Counter incremetValue={1} onClick={this.incrementCounter} id={i++} />
          <Counter incremetValue={5} onClick={this.incrementCounter} id={i++} />
          <Counter incremetValue={10} onClick={this.incrementCounter} id={i++} />
        </div>
        <Result value={this.state.counter} />
      </div>
    );
  }
}

export default App;
