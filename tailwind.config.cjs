const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    container: {
      padding: '2rem',
    },
    letterSpacing: {
      wide: '.05em',
      wider: '.1em',
      widest: '.2em',
    },
    extend: {
      colors: {
        primary: '#ff5787',
        secondary: '#ffefed',
      }
    },
  },

  plugins: [],
};

module.exports = config;
