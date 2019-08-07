"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function foo(x) {
  console.log(x);
}

var _default = {
  foo: foo
};
exports["default"] = _default;