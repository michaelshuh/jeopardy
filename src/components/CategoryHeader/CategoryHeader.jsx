import React, { PureComponent } from 'react';
import './CategoryHeader.css';
import PropTypes from 'prop-types';

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
      <div className="category-header">
        <span>{categoryName}</span>
      </div>
    );
  };

}
