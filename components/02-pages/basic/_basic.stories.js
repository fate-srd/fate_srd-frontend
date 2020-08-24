import React from 'react';

import template from './_basic.twig';
import templateAside from './_basic-aside.twig';
import logo from '../../../images/logo.svg';
import patreon from '../../../images/become_a_patron_button@2x.png';
import cover from '../../../images/cover--fae.png';
import buyEh from '../../../images/buy--eh.png';
import buyDtr from '../../../images/buy--dtr.png';
import buyItch from '../../../images/buy--itch.png';

/**
 * Storybook Definition.
 */
export default { title: 'Page/Basic' };

export const BasicPage = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: template({ logo, patreon, cover, buyEh, buyDtr, buyItch }),
    }}
  />
);

export const BasicPageWithAside = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: templateAside({ logo, patreon, cover, buyEh, buyDtr, buyItch }),
    }}
  />
);
