// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    }
  }
});
