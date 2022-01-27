import React from 'react';

const Template = require('./store-card').default;

export default {
  title: 'Component/Store Card',
};

export const StoreCard = () => (
  <div style={{ maxWidth: '500px', margin: '0 auto' }}>
    <Template cssClasses="patreon-bar--show" />
  </div>
);
