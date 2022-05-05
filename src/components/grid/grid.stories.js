import React from 'react';

const GridTemplate = require('./grid').default;

export default {
  title: 'Layout/Grid',
};

export const Grid = (cssClasses) => (
  <GridTemplate cssClasses={cssClasses}>Item</GridTemplate>
);
