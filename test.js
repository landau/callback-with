'use strict';

var assert = require('assert');
var callbackWith = require('./');

describe('callbackWith', function() {

  describe('async', function() {
    before(function() {
      this.fn = callbackWith('foo');
    });

    it('should return a function', function() {
      assert(typeof this.fn === 'function');
    });

    it('should respond with `foo`', function(done) {
      this.fn(function (foo) {
        assert(foo === 'foo');
        done();
      });
    });
  });

  describe('sync', function() {
    before(function() {
      this.fn = callbackWith.sync('foo');
    });

    it('should return a function', function() {
      assert(typeof this.fn === 'function');
    });

    it('should respond with `foo`', function() {
      this.fn(function (foo) {
        assert(foo === 'foo');
      });
    });

    it('should return the value of the created function', function() {
      var bar = this.fn(function () {
        return 'bar';
      });

      assert(bar === 'bar');
    });
  });
});
