import React from 'react';
import { ActualPlayCard } from './actual-play-card';

export const ActualPlayCardGrid = () => (
  <ul className="actual-play-card-wrapper">
    {[1, 2, 3, 4, 5, 6, 7].map((item) => (
      <li>
        <ActualPlayCard />
      </li>
    ))}
  </ul>
);
