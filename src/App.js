import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import AppBar from './menu-burger.js';
import Cmd from './Cmd.js';
// import Chill from './Chill.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="columns">
            <Cmd process="ps"/>
            <Cmd process="df"/>
            <Cmd process="net"/>
        </div>
        <div className="columns">
            <Cmd process="top"/>
            <Cmd process="io"/>
            <Cmd process="up"/>
        </div>
      </div>
    );
  }
}

export default App;
