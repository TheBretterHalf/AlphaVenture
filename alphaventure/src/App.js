import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <input id="symbol" type="text" name="symbol" placeholder="Stock Tag"/>
            <select id="interval" name="interval">
              <option value="1min">1min</option>
              <option value="5min">5min</option>
              <option value="15min">15min</option>
              <option value="30min">30min</option>
              <option value="60min">60min</option>
            </select>
            <select id="outputsize" name="outputsize">
              <option value="compact">Compact</option>
              <option value="full">Full</option>
            </select>
            <button onclick="search()">Search</button>
        </header>
      </div>
    );
  }
}

export default App;
