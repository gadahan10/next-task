import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    testIsolation: false
  },
});
