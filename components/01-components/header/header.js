Drupal.behaviors.headerMenu = {
  attach(context) {
    const mobileToggle = context.querySelector(
      '.site-header__branding__menu-toggle',
    );
    const mainMenu = context.querySelector('.nav-primary');
    const body = context.querySelector('body');
    const navInPage = context.querySelector('.nav-in-page');

    const handleMainMenu = () => {
      mainMenu.classList.toggle('nav-primary--open');
      body.classList.toggle('noscroll');
      mobileToggle.classList.toggle('open');
      navInPage.classList.toggle('hide');
    };

    mobileToggle.addEventListener('click', handleMainMenu);
  },
};
