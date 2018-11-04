import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryHeader from '../CategoryHeader';
import ClueTile from '../ClueTile';

import './CategoryColumn.scss';

export default class CategoryColumn extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    categoryClues: PropTypes.arrayOf(
      PropTypes.shape({
        cost: PropTypes.number.isRequired,
        clue: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  static defaultProps = {
    category: '',
    categoryClues:[],
  };

  render() {
    const { category, categoryClues } = this.props;

    return (
      <div className="category-column">
        <CategoryHeader categoryName={category} />
        {categoryClues.map(categoryClue => (
          <div></div>
        ))}
      </div>
    );
  };

}
