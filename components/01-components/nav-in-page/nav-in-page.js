Drupal.behaviors.mainMenu = {
  attach(context) {
    const navInPage = context.querySelector('.nav-in-page');
    const mobileToggle = context.querySelector('.mobile-toggle');
    const body = context.querySelector('body');

    const handleNavInPage = () => {
      navInPage.classList.toggle('nav-in-page--open');
      body.classList.toggle('noscroll');
    };

    mobileToggle.addEventListener('click', handleNavInPage);
  },
};
