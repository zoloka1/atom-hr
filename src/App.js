import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World!</h1>
        </header>
        <div>
          <h1 className="anduOutput"> Andu egy: </h1>
          <input type="textfield" id="latestAnduStatus" />
          <button id="saveButton"> save </button>
          <script src="fire.js"> </script>
        </div>

      </div>
    );
  }
}

export default App;
