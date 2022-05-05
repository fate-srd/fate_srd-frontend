import React from 'react';
import PropTypes from 'prop-types';

const TOC = ({ tableofcontents }) => (
  <div className="bg-white rounded border-gray-200 border border-solid text-sm md:float-right px-10 py-7">
    <h5 className="font-bold uppercase">Table of Contents</h5>
    {console.log('tableofcontents', tableofcontents)}
    {tableofcontents.map((x) => (
      <li>
        <a
          href={x.url}
          className="text-blue-200 hover:text-blue-500 transition-all underline"
        >
          {x.label}
        </a>
      </li>
    ))}
  </div>
);

TOC.defaultProps = {
  tableofcontents: [
    { url: 'https://randyoest.com', label: 'Situation Aspects' },
    {
      url: 'https://randyoest.com',
      label: 'Situation Aspects & Zones In Mental Conflicts',
    },
    {
      url: 'https://randyoest.com',
      label: 'Zones',
    },
  ],
};

TOC.propTypes = {
  tableofcontents: PropTypes.array,
};

export default TOC;
