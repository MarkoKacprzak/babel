"use strict";

var values = [3, 1, 2];
var result = values.sort(function (a, b) {
  return a - b;
});
console.log(result);