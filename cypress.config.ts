import { defineConfig } from "cypress";
import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      // cypress/plugins/index.js
      const { exec } = require("child_process");

      module.exports = (on, config) => {
        on("task", {
          execCommand(cmd) {
            return new Promise((resolve, reject) => {
              exec(cmd, (error, stdout, stderr) => {
                if (error) {
                  return reject(error);
                }
                if (stderr) {
                  return reject(stderr);
                }
                resolve(stdout);
              });
            });
          },
        });
      };

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
