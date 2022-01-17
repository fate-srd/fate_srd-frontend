import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';

import patreonLogo from '../../images/patreon-bar-logo.png';

export const PatreonBar = ({ cssClasses }) => {
  useEffect(() => {
    const patreonBarCookieName = 'Patreon Bar';
    const patreonBar = document.querySelector('.patreon-bar');

    /**
     * https://www.w3schools.com/js/js_cookies.asp
     */
    function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      const expires = `expires=${d.toUTCString()}`;
      document.cookie = `${cname}=${cvalue};${expires};path=/`;
    }

    function checkCookie() {
      const cookieList = document.cookie;
      return cookieList.includes(patreonBarCookieName);
    }

    function handlePatreonBar() {
      if (!checkCookie()) {
        patreonBar.classList.add('patreon-bar--show');
      }
    }

    const closeButton = document.querySelector('.patreon-bar__close');
    closeButton.addEventListener('click', () => {
      setCookie(patreonBarCookieName, false, 30);
      patreonBar.classList.remove('patreon-bar--show');
    });

    handlePatreonBar();
  });

  return (
    <section className={`patreon-bar ${cssClasses}`}>
      <div className="patreon-bar__inner">
        <img src={patreonLogo} alt="Patreon" className="patreon-bar__logo" />
        <a
          href="https://www.patreon.com/fate_srd"
          className="patreon-bar__button"
          target="_blank"
          rel="noreferrer"
        >
          Become a $1 supporting member
        </a>
        <button className="patreon-bar__close" type="button">
          Close for 30 days
          <FontAwesomeIcon
            icon={faTimes}
            className="patreon-bar__close__icon"
          />
        </button>
      </div>
    </section>
  );
};

PatreonBar.propTypes = {
  cssClasses: PropTypes.string,
};
