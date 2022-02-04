import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ cssClasses, children }) => (
  <ul className={cssClasses}>{children}</ul>
);

Grid.propTypes = {
  cssClasses: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Grid.defaultProps = {
  cssClasses: '',
};

export default Grid;
