# github-user-email [![Build Status](https://travis-ci.org/kevva/github-user-email.svg?branch=master)](https://travis-ci.org/kevva/github-user-email)

> Get a GitHub users email


## Install

```
$ npm install --save github-user-email
```


## Usage

```js
var githubUserEmail = require('github-user-email');

githubUserEmail('johndoe', function (err, mail) {
	console.log(mail);
	//=> 'johndoe@gmail.com'
});
```


## CLI

```
$ npm install --global github-user-email
```

```
$ github-user-email --help

  Example
    github-user-email johndoe
    johndoe@gmail.com
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
