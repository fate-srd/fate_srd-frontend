import React from 'react';
import CardStore from './card-store';

const GridTemplate = require('../grid/grid').default;

export default {
  title: 'Component/Card/Store',
};

export const Card = () => (
  <div style={{ maxWidth: '591px', margin: '4rem auto 0' }}>
    <CardStore />
  </div>
);

export const Grid = () => (
  <GridTemplate cssClasses="store-card-wrapper">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
      <li>
        <CardStore />
      </li>
    ))}
  </GridTemplate>
);
