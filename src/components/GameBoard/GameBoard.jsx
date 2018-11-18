import React, { Component } from 'react';
import CategoryColumn from '../CategoryColumn';

import './GameBoard.scss';
const gameBoard = {
  roundType: 'SINGLE',
  categories: [
    {
      category: 'Test 1',
      categoryClues: [
        'Clue 1-1',
        'Clue 1-2',
        'Clue 1-3',
        'Clue 1-4',
        'Clue 1-5',
      ]
    },
    {
      category: 'Test 2',
      categoryClues: [
        'Clue 2-1',
        'Clue 2-2',
        'Clue 2-3',
        'Clue 2-4',
        'Clue 2-5',
      ],
    },
    {
      category: 'Test 3',
      categoryClues: [
        'Clue 3-1',
        'Clue 3-2',
        'Clue 3-3',
        'Clue 3-4',
        'Clue 3-5',
      ],
    },
    {
      category: 'Test 4',
      categoryClues: [
        'Clue 4-1',
        'Clue 4-2',
        'Clue 4-3',
        'Clue 4-4',
        'Clue 4-5',
      ],
    },
    {
      category: 'Test 5',
      categoryClues: [
        'Clue 5-1',
        'Clue 5-2',
        'Clue 5-3',
        'Clue 5-4',
        'Clue 5-5',
      ],
    },
    {
      category: 'Test 6',
      categoryClues: [
        'Clue 6-1',
        'Clue 6-2',
        'Clue 6-3',
        'Clue 6-4',
        'Clue 6-5',
      ],
    },
  ]
};

export default class GameBoard extends Component {
  render() {
    return (
      <div className="gameboard">
        {gameBoard.categories.map((categoryData, i) => (
          <CategoryColumn key={i} roundType={gameBoard.roundType} category={categoryData.category} categoryClues={categoryData.categoryClues}/>
        ))}
      </div>
    );
  };

}
