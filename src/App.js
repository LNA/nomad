import React, { Component } from 'react';
import './App.css';
import HangoutsContainer from './components/HangoutsContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Nomad</h1>
        </div>
        <HangoutsContainer />
      </div>
    );
  }
}

export default App;
