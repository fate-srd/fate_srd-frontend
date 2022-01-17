import React from 'react';
import PropTypes from 'prop-types';

export const Fonts = ({ textString, cssClasses }) => (
  <p className={cssClasses}>{textString}</p>
);

Fonts.propTypes = {
  textString: PropTypes.string,
  cssClasses: PropTypes.string,
};

Fonts.defaultProps = {
  textString: 'Default text',
  cssClasses: '',
};
