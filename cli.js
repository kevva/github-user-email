#!/usr/bin/env node
'use strict';

var meow = require('meow');
var githubUserEmail = require('./');

var cli = meow({
	help: [
		'Example',
		'  $ github-user-email johndoe',
		'  johndoe@gmail.com'
	]
});

if (!cli.input[0]) {
	console.error('User required');
	process.exit(1);
}

githubUserEmail(cli.input[0], function (err, email) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(email);
});
