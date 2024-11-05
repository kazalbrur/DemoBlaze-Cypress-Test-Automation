const { defineConfig } = require('cypress');
const { addMochawesome } = require('cypress/plugin');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    setupNodeEvents(on, config) {
      // Ensure the Mochawesome plugin is added correctly
      addMochawesome(on);
      return config; // Return the config object to avoid issues
    },
  },
});
