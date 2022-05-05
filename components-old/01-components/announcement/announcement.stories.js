import React from 'react';

import template from './_announcement.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Regions/Announcement' };

export const SiteFooter = () => (
  <div dangerouslySetInnerHTML={{ __html: template() }} />
);
