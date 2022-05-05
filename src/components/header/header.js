import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faComments,
  faHeadSideHeadphones,
  faSearch,
  faSparkles,
  faBars,
  faTimes,
  faPlus,
  faMinus,
  faShoppingCart,
} from '@fortawesome/pro-regular-svg-icons';
import {
  faFacebook,
  faDiscord,
  faDiscourse,
  faReddit,
} from '@fortawesome/free-brands-svg-icons';
import Link from '../../utils/link';
import PatreonBar from '../patreonBar/patreonBar';

import logo from '../../images/logo.svg';

const Header = () => (
  <header className="header">
    <div className="header__branding">
      <Link to="/">
        <img src={logo} alt="Fate SRD Logo" className="header__logo" />
      </Link>
      <div className="header__branding__menu-toggle">
        <FontAwesomeIcon icon={faBars} className="bars" />
      </div>
    </div>
    <div className="header__nav">
      <nav
        className="nav-primary nav-primary--open"
        role="navigation"
        aria-label="Primary Navigation"
      >
        <div className="header__branding header__branding--inside">
          <img src={logo} alt="Fate SRD Logo" className="header__logo" />
          <div className="header__branding__menu-toggle">
            <FontAwesomeIcon icon={faTimes} className="times" />
          </div>
        </div>
        <ul className="nav-primary__ul">
          <li
            className="nav-primary__li has-nav-flyout nav-primary__sub"
            id="flyout-rules"
          >
            <button
              type="button"
              className="nav-primary__link nav-primary__toggle"
              data-target="flyout-rules"
            >
              <FontAwesomeIcon
                icon={faBook}
                className="nav-primary__link-icon"
              />
              <span className="nav-primary__rules-wrapper">
                Rules
                <FontAwesomeIcon
                  icon={faPlus}
                  className="nav-primary__sub__mobile-toggle plus"
                />
                <FontAwesomeIcon
                  icon={faMinus}
                  className="nav-primary__sub__mobile-toggle minus"
                />
              </span>
            </button>
            <div className="nav-flyout">
              <dl className="nav-flyout__region">
                <dt>Core Rules</dt>
                <dd>
                  <Link to="/fate-core">Fate Core</Link>
                </dd>
                <dd>
                  <Link to="/fate-accelerated">Fate Accelerated</Link>
                </dd>
                <dd>
                  <Link to="/fate-condensed">Fate Condensed</Link>
                </dd>
              </dl>

              <dl className="nav-flyout__region">
                <dt>Toolkits</dt>
                <dd>
                  <Link to="/fate-system-toolkit">Fate System Toolkit</Link>
                </dd>
                <dd>
                  <Link to="/fate-adversary-toolkit">
                    Fate Adversary Toolkit
                  </Link>
                </dd>
              </dl>

              <dl className="nav-flyout__region">
                <dt>Fate World Books</dt>
                <dd>
                  <Link to="/atomic-robo">Atomic Robo</Link>
                </dd>
                <dd>
                  <Link to="/venture-city">Venture City</Link>
                </dd>
                <dd>
                  <Link to="/war-of-ashes">War of Ashes</Link>
                </dd>
                <dd>
                  <Link to="/ihunt">#iHunt</Link>
                </dd>
              </dl>

              <dl className="nav-flyout__region">
                <dt>Worlds of Adventure</dt>
                <dd>
                  <Link to="/frontier-spirit">Frontier Spirit</Link>
                </dd>
                <dd>
                  <Link to="/gods-and-monsters">Gods and Monsters</Link>
                </dd>
                <dd>
                  <Link to="/sails-full-of-stars">Sails Full of Stars</Link>
                </dd>
                <dd>
                  <Link to="/three-rocketeers">Three Rocketeers</Link>
                </dd>
              </dl>

              <dl className="nav-flyout__region">
                <dt>Fate Codex</dt>
                <dd>
                  <Link to="/fate-codex/fate-codex-volume-1">Volume 1</Link>
                </dd>
                <dd>
                  <Link to="/fate-codex/fate-codex-volume-2">Volume 2</Link>
                </dd>
                <dd>
                  <Link to="/fate-codex/fate-codex-volume-3">Volume 3</Link>
                </dd>
              </dl>

              <dl className="nav-flyout__region">
                <dt>Odds &amp; Ends</dt>
                <dd>
                  <a
                    href="https://bookofhanz.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Book of Hanz
                  </a>
                </dd>
                <dd>
                  <Link to="/odds-and-ends">Odds &amp; Ends</Link>
                </dd>
              </dl>
            </div>
          </li>
          <li
            className="nav-primary__li has-nav-flyout nav-primary__sub"
            id="flyout-extras"
          >
            <button
              type="button"
              className="nav-primary__link nav-primary__toggle"
              data-target="flyout-extras"
            >
              <FontAwesomeIcon
                icon={faSparkles}
                className="nav-primary__link-icon"
              />
              <span className="nav-primary__rules-wrapper">
                Extras
                <FontAwesomeIcon
                  icon={faPlus}
                  className="nav-primary__sub__mobile-toggle plus"
                />
                <FontAwesomeIcon
                  icon={faMinus}
                  className="nav-primary__sub__mobile-toggle minus"
                />
              </span>
            </button>
            <div className="nav-flyout nav-flyout--simple">
              <dl className="nav-flyout__region nav-flyout__region--simple">
                <dt>More Fate Stuff for You</dt>
                <dd>
                  <Link to="/products">Games &amp; Products</Link>
                </dd>
                <dd>
                  <Link to="/downloads">Downloads</Link>
                </dd>
              </dl>
            </div>
          </li>

          <li
            className="nav-primary__li has-nav-flyout nav-primary__sub"
            id="flyout-actual-play"
          >
            <button
              type="button"
              className="nav-primary__link nav-primary__toggle"
              data-target="flyout-actual-play"
            >
              <FontAwesomeIcon
                icon={faHeadSideHeadphones}
                className="nav-primary__link-icon"
              />
              <span className="nav-primary__rules-wrapper">
                Actual Play
                <FontAwesomeIcon
                  icon={faPlus}
                  className="nav-primary__sub__mobile-toggle plus"
                />
                <FontAwesomeIcon
                  icon={faMinus}
                  className="nav-primary__sub__mobile-toggle minus"
                />
              </span>
            </button>
            <div className="nav-flyout nav-flyout--simple">
              <dl className="nav-flyout__region nav-flyout__region--simple">
                <dt>Watch, Listen, and Enjoy!</dt>
                <dd>
                  <Link to="/learn-to-play">Learn to Play Fate Series</Link>
                </dd>
                <dd>
                  <Link to="/actual-play">Actual Play List</Link>
                </dd>
              </dl>
            </div>
          </li>

          <li
            className="nav-primary__li has-nav-flyout nav-primary__sub"
            id="flyout-communities"
          >
            <button
              type="button"
              className="nav-primary__link nav-primary__toggle"
              data-target="flyout-communities"
            >
              <FontAwesomeIcon
                icon={faComments}
                className="nav-primary__link-icon"
              />
              <span className="nav-primary__rules-wrapper">
                Communities
                <FontAwesomeIcon
                  icon={faPlus}
                  className="nav-primary__sub__mobile-toggle plus"
                />
                <FontAwesomeIcon
                  icon={faMinus}
                  className="nav-primary__sub__mobile-toggle minus"
                />
              </span>
            </button>
            <div className="nav-flyout nav-flyout--simple">
              <dl className="nav-flyout__region nav-flyout__region--simple">
                <dt>Discuss Fate Around the Web</dt>
                <dd>
                  <a href="https://community.fate-srd.com/">
                    <FontAwesomeIcon icon={faDiscourse} /> Fate SRD Community
                  </a>
                </dd>
                <dd>
                  <a href="https://discord.gg/CeXKx8NGYU">
                    <FontAwesomeIcon icon={faDiscord} /> Fate Tabletop RPGs
                  </a>
                </dd>
                <dd>
                  <a href="https://www.reddit.com/r/FATErpg/">
                    <FontAwesomeIcon icon={faReddit} /> FATErpg Reddit
                  </a>
                </dd>
                <dd>
                  <a href="https://www.facebook.com/groups/faterpg/">
                    <FontAwesomeIcon icon={faFacebook} /> Fate Core /
                    Accelerated RPG
                  </a>
                </dd>
                <dd>
                  <a href="https://www.facebook.com/groups/FateCom/">
                    <FontAwesomeIcon icon={faFacebook} /> Fate Community
                  </a>
                </dd>
              </dl>
            </div>
          </li>

          <li className="nav-primary__li">
            <Link to="/store" className="nav-primary__link">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="nav-primary__link-icon"
              />
              Store
            </Link>
          </li>

          <li className="nav-primary__li nav-primary__li--search">
            <Link
              className="nav-primary__link"
              to="/search"
              role="search"
              aria-label="Search"
            >
              <FontAwesomeIcon
                icon={faSearch}
                className="nav-primary__link-icon"
              />
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <PatreonBar />
  </header>
);

export default Header;