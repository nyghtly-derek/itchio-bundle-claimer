import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    bundleName: 'Bundle for Ukraine',
  },
  pageLoadTimeout: 180000,
  redirectionLimit: 9001,
  retries: 0,
  video: false,
  watchForFileChanges: false,
  numTestsKeptInMemory: 5,
  experimentalMemoryManagement: true,
  injectDocumentDomain: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://itch.io/',
  },
})
