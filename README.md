[![Build Status](https://travis-ci.org/pkozlowski-opensource/directives-workshop.png?branch=master)](https://travis-ci.org/pkozlowski-opensource/directives-workshop)
[![devDependency Status](https://david-dm.org/pkozlowski-opensource/directives-workshop.png?branch=master)](https://david-dm.org/pkozlowski-opensource/directives-workshop#info=devDependencies)

directives-workshop
===================

## About this workshop

This repository contains demo and exercises for the AngularJS directives workshop. During the workshop participants
are going to build several AngularJS directives, mostly based on [Bootstrap's](http://getbootstrap.com) HTML and CSS.

The aim here is to go over several kinds of directives and illustrate typical coding and testing patterns.

## Installation

Before proceeding with the instructions below make sure that you've got node.js (version 0.10.x) installed for your
operating system: http://nodejs.org/download/. When you've got node.js and npm (comes with the node.js installation)
set up npm dependencies of this project:

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
