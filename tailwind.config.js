module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#172b54',
        secondary: '#c99700'
      },
      backgroundImage: (theme) => ({
        'landing-texture': "url('/icons/landing-bg.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
