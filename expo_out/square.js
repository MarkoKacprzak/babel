"use strict";

// assigning to exports will not modify module, must use module.exports
module.exports = function (width) {
  return {
    area: function area() {
      return width * width * 2;
    }
  };
};