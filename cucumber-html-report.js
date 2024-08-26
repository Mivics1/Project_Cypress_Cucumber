// node cucumber-html-report.js


const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/reports/cucumber-json/",
  reportPath: "cypress/reports/Multi-html-report/",
  ignoreBadJsonFile: true,
  displayReportTime: true,
  displayDuration: true,
  metadata: {
    browser: { name: "chrome", version: "128.x"},
    device: "Local test machine",
    platform: { name: "Windows 10", version: "22H2"},
  },
})