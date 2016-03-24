Package.describe({
  summary: "Run tests noninteractively, with results going to the console.",
  version: '1.0.9-rc.10'
});

Package.onUse(function (api) {

  api.use(['tinytest', 'underscore', 'random', 'ejson', 'check']);
  api.use('http', 'server');

  api.export('TEST_STATUS', 'client');

  api.addFiles(['driver.js'], "client");
  api.addFiles(['reporter.js'], "server");

  // This is to be run by phantomjs, not as part of normal package code.
  api.addAssets('runner.js', 'server');

  api.export('runTests');
});
