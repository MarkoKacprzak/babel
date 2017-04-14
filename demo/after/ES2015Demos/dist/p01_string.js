'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(function () {
    "use strict";

    console.log('##Strings');

    // multi-line string
    var a = 'hello\n    world';
    console.log(a);
    console.log(typeof a === 'undefined' ? 'undefined' : _typeof(a));

    // string interpolation
    var name = 'Joe';
    var yearOfBirth = 1999;

    var greeting = 'hello ' + name + ', you are ' + (2015 - yearOfBirth) + ' years old';
    console.log(greeting);
    console.log("John", "Doe");

    //throw new Error("Custom Error, testing error handling");
})();