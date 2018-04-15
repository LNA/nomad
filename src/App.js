import React, { Component } from 'react';
import './App.css';
import TripsContainer from './components/TripsContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Nomad</h1>
        </div>
        <TripsContainer />
      </div>
    );
  }
}

export default App;
