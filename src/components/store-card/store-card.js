import React from 'react';
import PropTypes from 'prop-types';

import bohCover from '../../images/store/Book of Hanz Cover.png';
import tableBkg from '../../images/store/tim-mossholder-ysDq0fY-bzo-unsplash.jpg';

const Button = ({ label, url, price, type, customClasses }) => (
  <a
    href={url}
    className={
      customClasses || `store-card__button store-card__button--${type}`
    }
    target="_blank"
    rel="noreferrer"
  >
    <span
      className={`store-card__dollar-sign store-card__dollar-sign--${type}`}
    >
      $
    </span>
    {price} {label}
  </a>
);

const products = {
  title: 'Book of Hanz',
  description:
    'Collected for the first time in paperback, The Book of Hanz unlocks the code to better Fate games than you ever imagined.',
  smallText: '48 page printed book and PDF.',
  image: bohCover,
  bkgImage: tableBkg,
  buy: [
    {
      label: 'Card Deck',
      price: '4',
      type: '',
      url: 'https://www.drivethrurpg.com/product/146133/Turn-Tracker-Initiative-Cards',
    },
  ],
  alsoAvailableText:
    'Print-on-demand (for international folks) & PDF available at:',
  alsoAvailable: [
    'https://www.drivethrurpg.com/product/350062/Book-of-Hanz',
    'https://amazingrando.itch.io/book-of-hanz',
  ],
};

const StoreCard = () => {
  const {
    image,
    bkgImage,
    title,
    description,
    smallText,
    buy,
    alsoAvailable,
    alsoAvailableText,
  } = products;
  return (
    <div className="store-card">
      <div
        className="store-card__image-content"
        style={{ backgroundImage: `url(${bkgImage})`, backgroundSize: 'cover' }}
      >
        <img src={image} alt={title} className="store-card__image" />
      </div>
      <div className="store-card__content">
        <h2 className="font-bold text-2xl text-blue-300 mt-8">{title}</h2>
        <p className="mb-4 leading-tight">{description}</p>
        {Array.from(buy).map((i) => (
          <Button
            key={i.label}
            label={i.label}
            price={i.price}
            type={i.type}
            url={i.url}
            customClasses={i.customClasses}
          />
        ))}
        <p className="text-xs" style={{ marginTop: 'auto' }}>
          {smallText}
        </p>
        {alsoAvailableText && (
          <p className="text-sm mt-4" style={{ marginBottom: '0.5rem' }}>
            {alsoAvailableText}
          </p>
        )}
        {alsoAvailable && (
          <ul className="store-card__also-available">
            {alsoAvailable.map((url) => (
              <li>
                <a
                  href={url}
                  className="store-card__also-available__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
  customClasses: PropTypes.string,
};

export default StoreCard;
