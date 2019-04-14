import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // zubair tum ne jo kaam krna ha idher krna ha
      // tum yahan jo bhi change karoge wo change page pr ajayega
      // page ko refresh krne ki zarurat nhi paregi khud hi hojaega
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      // yahan tk
    );
  }
}

export default App;
