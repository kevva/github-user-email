# github-user-email [![Build Status](https://travis-ci.org/kevva/github-user-email.svg?branch=master)](https://travis-ci.org/kevva/github-user-email)

> Get a GitHub users email


## Install

```
$ npm install --save github-user-email
```


## Usage

```js
const githubUserEmail = require('github-user-email');

githubUserEmail('johndoe').then(email => {
	console.log(email);
	//=> 'johndoe@gmail.com'
});
```


## Related

* [github-user-email-cli](https://github.com/kevva/github-user-email-cli) - CLI for this module


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
