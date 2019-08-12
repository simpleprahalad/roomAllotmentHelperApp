import React, { Component } from 'react';
import logo from '../public/kbs_banner.jpg';
import './App.css';
import Search from './Search';
import 'tachyons';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="header-text">Welcome to KBS</p>
        </div>
        <Search />
      </div>
    );
  }
}

export default App;
