const { addMochawesome } = require('cypress-mochawesome-reporter/plugin');

module.exports = (on, config) => {
  addMochawesome(on); // Register the Mochawesome plugin
  return config; // Return the config object
};
