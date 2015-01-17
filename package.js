Package.describe({
  name: 'Meteor Cast',
  summary: 'An implementation of the Chromecast CASTV2 protocol',
  version: '1.0.0',
  git: 'https://github.com/chrisbutler/meteor-cast'
});

Npm.depends({"castv2" : "0.1.4"});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('chrisbutler:meteor-cast.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chrisbutler:meteor-cast');
  api.addFiles('chrisbutler:meteor-cast-tests.js');
});
