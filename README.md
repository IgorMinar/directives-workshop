[![Build Status](https://travis-ci.org/pkozlowski-opensource/directives-workshop.png?branch=master)](https://travis-ci.org/pkozlowski-opensource/directives-workshop)
[![devDependency Status](https://david-dm.org/pkozlowski-opensource/directives-workshop.png?branch=master)](https://david-dm.org/pkozlowski-opensource/directives-workshop#info=devDependencies)

directives-workshop
===================

## Installation

* `npm install -g grunt-cli`
* `npm install`
* test your setup by running `grunt`

## Demo

As soon as your environment is set up you can see directives demo by:
* starting a build-in web server: `grunt server`
* pointing your favorite browser to [http://127.0.0.1:8000/src/](http://127.0.0.1:8000/src/)

## Development workflow

* `grunt tdd` - for TDD development. This will watch source and test files running all the test on each change.
* `grunt` - default build. This will lint the code and run all the tests.