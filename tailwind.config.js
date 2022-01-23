module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['BCSans'],
      bold: ['BCSans-Bold'],
    },
    extend: {
      width: {
        layout: '1140px',
      },
      minWidth: {
        4: '1rem',
      },
      colors: {
        bcBluePrimary: '#003366',
        bcYellowPrimary: '#FCBA19',
        bcBlack: '#313132',
        bcGray: '#606060',
        bcLightGray: '#F2F2F2',
        bcBlueLink: '#1A5A96',
        bcBlueNav: '#38598A',
        bcRedError: '#D8292F',
        bcGreenSuccess: '#2E8540',
        bcYellowWarning: '#F5A623',
        bcBlueAccent: '#38598A',
        bcBlueIndicator: '#0053A4',
        bcLightBackground: '#F7F9FC',
        bcLightBlueBackground: '#D9E7F3',
      },
    },
  },
  plugins: [],
};
