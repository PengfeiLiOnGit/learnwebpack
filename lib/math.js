"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.square = square;
exports.cube = cube;

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}