import React from 'react';
import { ActualPlayCard } from './actual-play-card';
import { ActualPlayCardGrid } from './actual-play-card-grid';

export default {
  title: 'Component/Actual Play Card',
};

export const Card = () => (
  <div style={{ maxWidth: '263px', margin: '0 auto' }}>
    <ActualPlayCard />
  </div>
);

export const Grid = () => <ActualPlayCardGrid />;
