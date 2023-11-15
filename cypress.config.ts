import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",    
    video: true,
     setupNodeEvents(on: any, config: any) {
      allureWriter(on, config);
      on('task', {downloadFile});
      return require("./cypress/plugins")(on, config);
    },
    specPattern: "cypress/e2e/**/*.feature",

    env: {
      allure: true,
      allureAttachRequests: true,
      allureAddVideoOnPass: true,
      screenshotOnRunFailure: true,
      snapshotOnly: true,
    },
  },
});
 