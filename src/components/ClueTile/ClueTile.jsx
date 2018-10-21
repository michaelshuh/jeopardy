import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ClueTile.scss';

export default class ClueTile extends Component {
  static propTypes = {
    clue: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  };

  static defaultProps = {
    clue: '',
    cost: 0,
  };

  render() {
    const { cost } = this.props;

    return (
      <div className="clue-tile">
        <span>${cost}</span>
      </div>
    );
  };

}
