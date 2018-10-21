import React, { PureComponent } from 'react';
import './ClueTile.css';
import PropTypes from 'prop-types';

export default class ClueTile extends PureComponent {
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
