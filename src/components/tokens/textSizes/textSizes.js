import React from 'react';
import PropTypes from 'prop-types';

export const TextSizes = ({ textString, cssClasses }) => (
  <p className={cssClasses}>{textString}</p>
);

TextSizes.propTypes = {
  textString: PropTypes.string,
  cssClasses: PropTypes.string,
};

TextSizes.defaultProps = {
  textString: 'Default text',
  cssClasses: '',
};
