Package.describe({
  name: 'jgellatly5:errors',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'A pattern to display application errors to the user',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'null'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.2.0.2');
  api.use(['minimongo','mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jgellatly5:errors');
  api.addFiles('errors-tests.js');
});
