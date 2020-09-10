Drupal.behaviors.navInPage = {
  attach(context) {
    /**
     * Small screen functionality.
     */
    const navInPage = context.querySelector('.nav-in-page');
    const mobileToggle = context.querySelector('.nav-in-page__mobile-toggle');
    const body = context.querySelector('body');

    const handleNavInPage = () => {
      navInPage.classList.toggle('nav-in-page--open');
      body.classList.toggle('noscroll');
    };

    mobileToggle.addEventListener('click', handleNavInPage);

    /**
     * Large screen functionality
     */
    const sectionToggleButton = context.querySelectorAll(
      '.nav-in-page__show-menu',
    );
    const handleSectionToggleButton = () => {
      this.setAttribute('aria-expanded', 'taco');
      //   if ( content.getAttribute('aria-hidden') === 'true' ) {
      //     content.setAttribute('aria-hidden', 'false');
      //     button.setAttribute('aria-expanded', 'true');
      // } else {
      //     content.setAttribute('aria-hidden', 'true');
      //     button.setAttribute('aria-expanded', 'false');
      // }

      //   this.setAttribute('aria-expanded', 'false')
      //   aria-expanded="false"
    };

    sectionToggleButton.addEventListener('click', handleSectionToggleButton);
  },
};
