import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { showClue } from '../../redux/actions';

import './ClueTile.scss';

export class ClueTile extends Component {
  static propTypes = {
    clue: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  };

  static defaultProps = {
    clue: '',
    cost: 0,
  };

  showClue(clue) {
    this.props.showClue(clue);
  }

  render() {
    const { cost, clue } = this.props;

    return (
      <div className={classNames('clue-tile', 'tile')} onClick={() => this.showClue(clue)}>
        <span>${cost}</span>
      </div>
    );
  };
}

const mapDispatchToProps = {
  showClue,
};

export default connect(null, mapDispatchToProps)(ClueTile);
