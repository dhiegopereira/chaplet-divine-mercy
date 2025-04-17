module.exports = {
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: process.env.REACT_APP_PRIMARY_COLOR || '#0000FF',
        secondary: process.env.REACT_APP_SECONDARY_COLOR || '#808080',
        background: process.env.REACT_APP_BACKGROUND_COLOR || '#FFFFFF',
      },
    },
  },
};
