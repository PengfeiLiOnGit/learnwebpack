"use strict";

require("core-js/modules/es.array.join");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

var _print = _interopRequireDefault(require("./print"));

var _math = require("./math");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('div'); // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的

  element.innerHTML = _.join(['Hello', 'webpack'], ' '); // element.classList.add('hello');
  // element.classList.add('header');
  //添加图像
  // var icon = new Image();
  // icon.src = Icon;
  // console.log('template:>>',Data);
  // console.log('name:>>',Name);
  // element.appendChild(icon);
  // let btn = document.createElement('button');
  // btn.textContent="webpack按钮"
  // btn.onclick = printMe;
  // console.log(cube(3));
  // element.appendChild(btn);
  // element.innerHTML = ['Hello','webpack'+ cube(5)].join('\n\n');

  Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./export_webpack'));
  }).then(function (module) {
    var m = module["default"];
    m.foo(3);
  });
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    (0, _print["default"])();
  });
}