Npm.depends({'lodash': '3.10.1'});

Package.describe({
	name: "stevezhu:lodash",
	summary: "A utility library delivering consistency, customization, performance, & extras.",
	version: "3.10.1",
	git: "https://github.com/stevezhu/meteor-lodash.git"
});

Package.onUse(function(api) {
	api.addFiles('lodash.js', 'client', { transpile: false });
	api.addFiles('client.js', 'client');
	api.addFiles('server.js', 'server');
	api.export('lodash');
	api.export('_');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('stevezhu:lodash');
	api.addFiles('tests/test.js');
});
