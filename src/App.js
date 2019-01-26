import React, { Component } from 'react';
import './App.css';
import Crypto from './components/Crypto.js'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="App-header">
            <h1 className="greetings">Welcome to <i className="fab fa-bitcoin"></i>rypto!</h1>
            <p>Just displaying some crypto information!</p>
            <i className="fas fa-angle-double-down"></i>
          </div>
        </div>
        <Crypto />
      </React.Fragment>
    );
  }
}

export default App;
