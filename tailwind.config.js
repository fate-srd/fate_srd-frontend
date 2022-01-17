module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: {
        DEFAULT: '#fff',
      },
      blue: {
        100: '#DBEFFF',
        200: '#1B75BC',
        500: '#0D436D',
        700: '#0A3B62',
        900: '#063255',
      },
      gray: {
        100: '#F9F9F9',
        200: '#e5e5e5',
        500: '#434343',
      },
      yellow: {
        300: '#FFF8B9',
        500: '#FFEA9F',
        700: '#95813A',
      },
      patreon: {
        DEFAULT: '#E85B46',
        darker: '#bd422f',
        darkerHover: '#af3c2a',
      },
    },
    fontFamily: {
      fate: ['fate', 'sans-serif'],
      inter: ['Inter', 'HelveticaNeue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xs: 'clamp(0.6375rem, 1.4vw, 0.8rem)',
      sm: 'clamp(0.8375rem, 1.4vw, 1rem)',
      base: 'clamp(0.9375rem, 1.6vw, 1.125rem)',
      lg: 'clamp(1rem, 2.1vw, 1.3rem)',
      xl: 'clamp(1.2rem, 2.4vw, 1.5rem)',
      '2xl': 'clamp(1.5rem, 3.1vw, 2.375rem)',
    },
    borderRadius: {
      none: '0',
      sm: '3px',
      DEFAULT: '5px',
      full: '9999px',
    },
    boxShadow: {
      DEFAULT:
        '0 50.0488px 40.0391px rgba(0, 0, 0, 0.0711761), 0 30.1471px 24.1177px rgba(0, 0, 0, 0.0715712), 0 19.3198px 15.4559px rgba(0, 0, 0, 0.0709344), 0 12.5216px 10.0172px rgba(0, 0, 0, 0.0688567), 0 7.88218px 6.30574px rgba(0, 0, 0, 0.0645926)',
      inset:
        '0 50.0488px 40.0391px rgba(0, 0, 0, 0.0711761) inset, 0 30.1471px 24.1177px rgba(0, 0, 0, 0.0715712) inset, 0 19.3198px 15.4559px rgba(0, 0, 0, 0.0709344) inset, 0 12.5216px 10.0172px rgba(0, 0, 0, 0.0688567) inset, 0 7.88218px 6.30574px rgba(0, 0, 0, 0.0645926) inset',
    },
    dropShadow: {
      DEFAULT:
        'drop-shadow(0 100px 80px rgba(0, 0, 0, 0.07)) drop-shadow(0 16.6967px 33.4221px rgba(0, 0, 0, 0.0723856)) drop-shadow(0 10.7449px 17.869px rgba(0, 0, 0, 0.0732421)) drop-shadow(0 8.21048px 10.0172px rgba(0, 0, 0, 0.0717905)) drop-shadow(0 5.99024px 5.32008px rgba(0, 0, 0, 0.0663313)) drop-shadow(0 3.32879px 2.21381px rgba(0, 0, 0, 0.051554))',
    },
    extend: {},
  },
  plugins: [],
};
