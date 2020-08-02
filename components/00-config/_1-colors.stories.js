import React from 'react';

import colors from './_1-colors.twig';

import colorsData from './_1-colors.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Tokens/Colors' };

export const Palettes = () => (
  <div dangerouslySetInnerHTML={{ __html: colors(colorsData) }} />
);
