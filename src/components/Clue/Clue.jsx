import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Clue.scss';

export default class ClueTile extends Component {
  static propTypes = {
    clue: PropTypes.string.isRequired,
  };

  static defaultProps = {
    clue: '',
  };

  render() {
    const { clue } = this.props;

    return (
      <div className='clue'>
        <h1>{clue}</h1>
      </div>
    );
  };

}
