import React from 'react';
import PropTypes from 'prop-types';

const ActualPlayCard = ({ title, videoId, imageURL, publishedAt }) => (
  <article key={title} className="actual-play-card">
    <a href={`https://www.youtube.com/watch?v=${videoId}`}>
      <img className="actual-play-card__img" src={imageURL} alt={title} />
    </a>
    <h3 className="actual-play-card__title">
      <a href={`https://www.youtube.com/watch?v=${videoId}`}>{title}</a>
    </h3>
    <p className="text-sm">{publishedAt}</p>
  </article>
);

ActualPlayCard.propTypes = {
  title: PropTypes.string,
  videoId: PropTypes.string,
  imageURL: PropTypes.string,
  publishedAt: PropTypes.string,
};

ActualPlayCard.defaultProps = {
  title:
    'Good Neighbors Fate World of Adventure, Run by the Author Paul Stefko - Learn to Play Fate RPG',
  videoId: 'T-8UyqsGO84',
  imageURL: 'https://i.ytimg.com/vi/T-8UyqsGO84/maxresdefault.jpg',
  publishedAt: 'Aug 07, 2021',
};

export default ActualPlayCard;
