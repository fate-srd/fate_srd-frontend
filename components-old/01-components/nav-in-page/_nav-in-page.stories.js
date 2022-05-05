import React from 'react';

import template from './_nav-in-page.twig';
import logo from '../../../images/logo.svg';
import patreon from '../../../images/become_a_patron_button@2x.png';
import cover from '../../../images/cover--fae.png';
import buyEh from '../../../images/buy--eh.png';
import buyDtr from '../../../images/buy--dtr.png';
import buyItch from '../../../images/buy--itch.png';

import './nav-in-page';

/**
 * Storybook Definition.
 */
export default { title: 'Regions/Nav In Page' };

export const NavInPage = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: template({ logo, patreon, cover, buyEh, buyDtr, buyItch }),
    }}
  />
);
