import React from 'react';
import ActualPlayCard from './card-actual-play';

const GridTemplate = require('../grid/grid').default;

export default {
  title: 'Component/Card/Actual Play',
};

export const Card = () => (
  <div style={{ maxWidth: '263px', margin: '0 auto' }}>
    <ActualPlayCard />
  </div>
);

export const Grid = () => (
  <GridTemplate cssClasses="actual-play-card-wrapper">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
      <li>
        <ActualPlayCard />
      </li>
    ))}
  </GridTemplate>
);
