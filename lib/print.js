"use strict";

require("core-js/modules/es.array.join");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = printMe;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function printMe() {
  // console.log('I get called from print.js!');
  // console.error('I get called from print.js! test err!');
  var s = _lodash["default"].join(['Hello', 'webpack'], ' ');

  console.log(s);
  console.log('Updating print.js...');
}