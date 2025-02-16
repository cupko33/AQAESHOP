
/* const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}); */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 16000,
  retries: {
    runMode: 3,
    openMode: 0,
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.*",
    baseUrl: "https://automaticityacademy.ngrok.app/",
  },
  chromeWebSecurity: false,
  video: false,
  viewportWidth: 1280,
  viewportHeight: 720,

});
