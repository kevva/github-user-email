'use strict';
var ghGot = require('gh-got');
var Promise = require('pinkie-promise');

module.exports = function (user, opts) {
	if (typeof user !== 'string') {
		return Promise.reject(new Error('User required'));
	}

	return ghGot('users/' + user, opts).then(function (data) {
		return data.body.email;
	});
};
