const path = require('path');

const defaults = {
  timeout: 30000,
  standard: 'WCAG2AA',
  runners: ['axe'],
  viewport: {
    width: 1300,
    height: 2400,
  },
};

const currentPath = path.resolve(__dirname);

const screenCap = fileName => `screen capture ${currentPath}/results/${fileName}.png`;

const urls = [
  {
    url: 'http://localhost:3000',
    actions: [screenCap('home')],
  },
];

module.exports = {
  defaults,
  urls,
};
