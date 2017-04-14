"use strict";

var _arithemtic = require("./arithemtic.js");

var result = _arithemtic.operations.add(1, 1); //require("babel-register"); doesn't work becose first file can't be transpiled.

console.log(result);

result = _arithemtic.operations.subtract(3, 1);
console.log(result);

//require("babel-polyfill");
//import "babel-polyfill";
var included = "abcde".includes("cd"); //old node version require to babel register with babel-polyfill
console.log(included);

// test runtime = change plugin in .babelrc + add npm packages babel-runtime + babel-plugin-transform-runtime
// let promise = new Promise( function (resolve, reject) {}); //sendboxing promis