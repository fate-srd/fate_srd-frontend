import React from 'react';

import template from './_basic.twig';
import logo from '../../../images/logo-with-shadow.svg';
import patreon from '../../../images/become_a_patron_button@2x.png';

/**
 * Storybook Definition.
 */
export default { title: 'Page/Basic' };

export const BasicPage = () => (
  <div dangerouslySetInnerHTML={{ __html: template({ logo, patreon }) }} />
);
