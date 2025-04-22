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
  numTestsKeptInMemory: 0,
  experimentalMemoryManagement: true,
  injectDocumentDomain: true,
  e2e: {
    baseUrl: 'https://itch.io/',
  },
})
