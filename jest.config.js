const path = require('path')
module.exports = {
  testURL: "http://localhost",
  verbose: true,
  testMatch: ['**/__test__/*.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,ts}",
    "!**/node_modules/**"
  ],
  coverageDirectory: path.resolve(__dirname, "./__test__/coverage"),
  coverageReporters: ["text-summary", "html"],
  // coverageThreshold: {
  //   global: {
  //     "branches": 100,
  //     "functions": 100,
  //     "lines": 100,
  //     "statements": 100
  //   }
  // }
}