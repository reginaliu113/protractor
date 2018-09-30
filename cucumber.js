// exports.config = {
//   framework: 'jasmine',
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   specs: ['spec.js'],
// }
//protractor.conf.js
exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 30000,
  allScriptsTimeout: 30000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature'
  ],

  baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: 'features/step_definitions/step_definitions.js',
    tags: true,
    plugin: ["pretty"],
    profile: false,
    'no-source': true,
    strict: true,

  }
};