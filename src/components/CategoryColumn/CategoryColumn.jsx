import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryHeader from '../CategoryHeader';
import ClueTile from '../ClueTile';

import './CategoryColumn.scss';

export default class CategoryColumn extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    categoryClues: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
    roundType: PropTypes.string.isRequired,
  };

  static defaultProps = {
    roundType: 'SINGLE',
    category: '',
    categoryClues:[],
  };

  render() {
    const { category, categoryClues, roundType } = this.props;
    const multiplier = roundType === 'SINGLE' ? 100 : 200;

    return (
      <div className="category-column">
        <CategoryHeader categoryName={category} />
        {categoryClues.map((categoryClue, i) => (
          <ClueTile key={i} cost={(i+1)*multiplier} clue={categoryClue} />
        ))}
      </div>
    );
  };

}
