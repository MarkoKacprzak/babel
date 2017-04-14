"use strict";

function operations() {}

operations.prototype.add = function (a, b) {
  return a + b;
};

operations.prototype.subtract = function (a, b) {
  return a - b;
};

module.exports = operations;