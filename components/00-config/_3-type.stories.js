import React from 'react';

import data from './_3-type';

/**
 * Storybook Definition.
 */
export default { title: 'Tokens/Type' };

export const Type = () => <div dangerouslySetInnerHTML={{ __html: data }} />;
