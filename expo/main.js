"use strict";

var operations = require("./arithmetic.js");

var result = new operations().add(1, 1);

console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done);
