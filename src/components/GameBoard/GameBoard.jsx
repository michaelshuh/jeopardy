import React, { Component } from 'react';
import CategoryColumn from '../CategoryColumn';

export default class GameBoard extends Component {
  render() {
    const categoryClues = [
      {
        cost: 100,
        clue: 'Clue 1',
      },
      {
        cost: 200,
        clue: 'Clue 2',
      },
      {
        cost: 300,
        clue: 'Clue 3',
      },
      {
        cost: 400,
        clue: 'Clue 4',
      },
      {
        cost: 500,
        clue: 'Clue 5',
      },
    ];

    return (
      <div>
        <CategoryColumn category='Test' categoryClues={categoryClues}/>
      </div>
    );
  };

}
