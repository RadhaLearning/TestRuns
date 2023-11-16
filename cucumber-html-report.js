const report = require("multiple-cucumber-html-reporter");

const dayjs = require("dayjs")
//datas do arquivo
const startsDate = dayjs().format("MMM DD, YYYY - hh:mm:ss a")

report.generate({
  jsonDir: "cypress/reports/",  // ** Pasta do relatorio de teste **//
  reportPath: "cypress/reports/chrome/", // ** pasta do arquivo  .html  **//

  metadata: {
    browser: {
      name: "chrome",
      version: "> 116 (64-bit)"
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Projet :', value: 'Orangehrmlive' },
      { label: 'Version :', value: 'Q4 22' },
      { label: 'Cycle :', value: '2023 Q1' },
      { label: 'Environment:', value: 'Demo QA' },
      { label: 'Test time: ', value: startsDate },
      { label: 'Tester :', value: 'CEO' },
    ]
  },
  scenarioTimestamp: true,
  displayDuration: true,
  pageTitle: 'Test Report',
  reportName: 'Automated Test Report',
  openReportInBrowser: true

});
