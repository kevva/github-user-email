'use strict';
const ghGot = require('gh-got');

module.exports = (user, opts) => {
	if (typeof user !== 'string') {
		return Promise.reject(new TypeError(`Expected a \`string\`, got \`${typeof user}\``));
	}

	return ghGot(`users/${user}`, opts).then(data => data.body.email);
};
