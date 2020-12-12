function patronBar() {
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
}

setTimeout(patronBar, 1000);
