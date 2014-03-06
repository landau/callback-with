'use strict';

var slice = [].slice;

function isFn(fn) {
  return typeof fn === 'function';
}

function toArray(arr) {
  return slice.call(arr);
}

function last(arr) {
  return arr[arr.length - 1];
}

function genCallback() {
  var args = toArray(arguments);
  return function callbackWith() {
    var callback = last(toArray(arguments));
    var self = this;

    process.nextTick(function() {
      if (isFn(callback)) callback.apply(self, args);
    });
  };
}

function genCallbackSync() {
  var args = toArray(arguments);
  return function callbackWithSync() {
    var callback = last(toArray(arguments));
    if (isFn(callback)) return callback.apply(this, args);
  };
}

module.exports = genCallback;
genCallback.sync = genCallbackSync;
