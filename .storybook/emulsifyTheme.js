// Documentation on theming Storybook: https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  // Branding
  brandTitle: 'Fate SRD',
  brandUrl: 'https://fate-srd.com',
  brandImage:
    'https://raw.githubusercontent.com/amazingrando/fate_srd/master/images/logo.png',
});
