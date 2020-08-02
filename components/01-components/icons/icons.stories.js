import React from 'react';

import iconTwig from './icons.twig';

import iconData from './icons.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Tokens/Icons' };

export const icons = () => (
  <div dangerouslySetInnerHTML={{ __html: iconTwig(iconData) }} />
);
