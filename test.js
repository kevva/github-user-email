'use strict';

var test = require('ava');
var githubUserEmail = require('./');

test(function (t) {
	t.plan(2);

	githubUserEmail('kevva', function (err, data) {
		t.assert(!err, err);
		t.assert(data === 'kevinmartensson@gmail.com', data);
	});
});
