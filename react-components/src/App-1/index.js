import React, { Component } from 'react';
import axios from 'axios';

import CardList from '../CardList';
import './App.css';

class Form extends React.Component {
  state = {
    username: ''
  };

  //when submit button clicked
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.username);
    this.setState({ username: '' })
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.username} type="text" onChange={this.handleChange} name="username" placeholder="Github username" />
        <button type="submit">Add user</button>
      </form>
    );
  }

}

class App extends Component {
  state = {
    data: []
  };

  handleSubmit = (username) => {
    let URL = 'https://api.github.com/users/';
    axios.get(`${URL}${username}`).then((response) => {
      let userData = {
        avatar_url: response.data.avatar_url,
        name: response.data.name,
        company: response.data.company,
        id: response.data.id
      };
      this.setState((prevState) => {
        return { data: [...prevState.data, userData] };
      });
    });
  }

  handleClear = () => {
    this.setState({ data: [] });
  }

  render() {

    return (
      <div className="App">
        <div className="controls">
          <Form handleSubmit={this.handleSubmit} />
          <button onClick={this.handleClear}>Clear All</button>
        </div>

        <CardList data={this.state.data} />
      </div>
    );
  }
}

export default App;

/*

*/
