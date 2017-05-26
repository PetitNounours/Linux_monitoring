import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import AppBar from './menu-burger.js';
import Cmd from './Cmd.js';
// import Chill from './Chill.js';

class App extends Component {
  render() {
    return (
      <div className="columns">
          <Cmd process="ps"/>
          <Cmd process="df"/>
      </div>
    );
  }
}

export default App;
