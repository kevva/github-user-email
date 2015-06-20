'use strict';
var ghGot = require('gh-got');

module.exports = function (user, opts, cb) {
	opts = opts || {};

	if (typeof user !== 'string') {
		throw new Error('User required');
	}

	if (typeof opts !== 'object') {
		cb = opts;
		opts = {};
	}

	ghGot('users/' + user, opts, function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, data.email);
	});
};
