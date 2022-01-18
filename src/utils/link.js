import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ children, to, className }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  className: PropTypes.string,
};

export default Link;
