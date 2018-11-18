import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import Clue from './components/Clue';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameBoard />
        <Clue />
      </div>
    );
  }
}

export default App;
