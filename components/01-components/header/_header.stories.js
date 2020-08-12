import React from 'react';

import template from './_header.twig';
import logo from '../../../images/logo.svg';

/**
 * Storybook Definition.
 */
export default { title: 'Regions/Site Header' };

export const SiteHeader = () => (
  <div dangerouslySetInnerHTML={{ __html: template({ logo }) }} />
);
