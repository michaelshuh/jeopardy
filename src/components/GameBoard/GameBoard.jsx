import React, { Component } from 'react';
import CategoryColumn from '../CategoryColumn';

import './GameBoard.scss';
const gameBoard = {
  data: [
    {
      category: 'Test 1',
      categoryClues: [
        {
          cost: 100,
          clue: 'Clue 1-1',
        },
        {
          cost: 200,
          clue: 'Clue 1-2',
        },
        {
          cost: 300,
          clue: 'Clue 1-3',
        },
        {
          cost: 400,
          clue: 'Clue 1-4',
        },
        {
          cost: 500,
          clue: 'Clue 1-5',
        }
      ]
    },
    {
      category: 'Test 2',
      categoryClues: [
        {
          cost: 100,
          clue: 'Clue 2-1',
        },
        {
          cost: 200,
          clue: 'Clue 2-2',
        },
        {
          cost: 300,
          clue: 'Clue 2-3',
        },
        {
          cost: 400,
          clue: 'Clue 2-4',
        },
        {
          cost: 500,
          clue: 'Clue 2-5',
        }
      ],
    },
    {
      category: 'Test 3',
      categoryClues: [
        {
          cost: 100,
          clue: 'Clue 3-1',
        },
        {
          cost: 200,
          clue: 'Clue 3-2',
        },
        {
          cost: 300,
          clue: 'Clue 3-3',
        },
        {
          cost: 400,
          clue: 'Clue 3-4',
        },
        {
          cost: 500,
          clue: 'Clue 3-5',
        }
      ],
    },
    {
      category: 'Test 4',
      categoryClues: [
        {
          cost: 100,
          clue: 'Clue 4-1',
        },
        {
          cost: 200,
          clue: 'Clue 4-2',
        },
        {
          cost: 300,
          clue: 'Clue 4-3',
        },
        {
          cost: 400,
          clue: 'Clue 4-4',
        },
        {
          cost: 500,
          clue: 'Clue 4-5',
        }
      ],
    },
    {
      category: 'Test 5',
      categoryClues: [
        {
          cost: 100,
          clue: 'Clue 5-1',
        },
        {
          cost: 200,
          clue: 'Clue 5-2',
        },
        {
          cost: 300,
          clue: 'Clue 5-3',
        },
        {
          cost: 400,
          clue: 'Clue 5-4',
        },
        {
          cost: 500,
          clue: 'Clue 5-5',
        }
      ],
    },
    {
      category: 'Test 6',
      categoryClues: [
        {
          cost: 100,
          clue: 'Clue 6-1',
        },
        {
          cost: 200,
          clue: 'Clue 6-2',
        },
        {
          cost: 300,
          clue: 'Clue 6-3',
        },
        {
          cost: 400,
          clue: 'Clue 6-4',
        },
        {
          cost: 500,
          clue: 'Clue 6-5',
        }
      ],
    },
  ]
};

export default class GameBoard extends Component {
  render() {
    const categoryData = gameBoard.data[0];
    const category = categoryData.category;
    const categoryClues = categoryData.categoryClues;
    return (
      <div className="gameboard">
        <CategoryColumn category={category} categoryClues={categoryClues}/>
      </div>
    );
  };

}
