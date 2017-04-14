"use strict";

var PI = Math.PI;


exports.area = function (r) {
  return PI * r * r * 2;
};

exports.circumference = function (r) {
  return 2 * PI * r;
};