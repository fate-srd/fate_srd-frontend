import template from './icons.twig';

import iconData from './icons.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Tokens/Icons' };

export const Icons = () => template(iconData);
