import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { hideClue } from '../../redux/actions';
import './Clue.scss';

export class Clue extends Component {
  static propTypes = {
    clue: PropTypes.string.isRequired,
    showCurrentClue: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    clue: '',
    showCurrentClue: false,
  };

  hideClue(clue) {
    this.props.hideClue();
  }

  render() {
    const { clue, showCurrentClue } = this.props;

    return (
      <div className={classNames({clue: true, 'hide': !showCurrentClue })}>
        <button onClick={() => this.hideClue()}>X</button>
        <h1>{clue}</h1>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const clue = state.jeopardy.currentClue;
  const showCurrentClue = state.jeopardy.showClue;

  const returnVal = {
    clue,
    showCurrentClue,
  };
  return returnVal;
}

const mapDispatchToProps = {
  hideClue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Clue);
