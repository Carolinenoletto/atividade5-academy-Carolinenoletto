const { defineConfig } = require('cypress');

module.exports = defineConfig({
  //pageLoadTimeout: 100000
  e2e: {
    env: {
      apiBaseUrl: 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});