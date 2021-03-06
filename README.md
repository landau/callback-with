[![Build Status](https://travis-ci.org/landau/callback-with.png?branch=master)](https://travis-ci.org/landau/callback-with)

callback-with
=============

Generates a function that is called with initially supplied arguments.

## install

`npm i -S callback-with`

## Usage

```js
// async version
var fn = callbackWith('foo');

fn(function (foo) {
  assert(foo === 'foo'); // true
});

// sync version can return values
var fn = callbackWith.sync('foo');

var bar = fn(function (foo) {
  assert(foo === 'foo'); // true
  return 'bar';
});

assert(bar === 'bar'); // true
```
