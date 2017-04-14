define(["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var operations = exports.operations = {
		add: function add(a, b) {
			return a + b;
		},
		subtract: function subtract(a, b) {
			return a - b;
		}
	};
});
define(['arithemtic.js'], function (_arithemtic) {
  'use strict';

  var result = _arithemtic.operations.add(1, 1);
  console.log(result);

  result = _arithemtic.operations.subtract(3, 1);
  console.log(result);
});
