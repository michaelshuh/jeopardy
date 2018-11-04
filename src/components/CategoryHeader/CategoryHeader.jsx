import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './CategoryHeader.scss';

export default class CategoryHeader extends PureComponent {
  static propTypes = {
    categoryName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    categoryName: '',
  };

  render() {
    const { categoryName } = this.props;

    return (
      <div></div>
    );
  };

}
