Package.describe({
  name: 'chrisbutler:meteor-cast',
  summary: 'An implementation of the Chromecast CASTV2 protocol',
  version: '1.0.5',
  git: 'https://github.com/chrisbutler/meteor-cast'
});

Npm.depends({
  "castv2": "0.1.4",
  "mdns": "2.2.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('meteor-cast.js', ['server']);
  api.export('MeteorCast', ['server']);
});
