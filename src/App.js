import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import GameArea from "./components/game_area";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <GameArea />
      </div>
    );
  }
}

export default App;
