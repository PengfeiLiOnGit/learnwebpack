// 通过import 引入
// import _ from 'lodash';
// 引入css，全名
// import './style.css';
// import './header.less';
// 引入图像
// import Icon from '../static/icon.png';
// 引入data数据
// import Data from './data.xml';
// import Name from './data';
// 引入js
import printMe from './print';
import {cube} from "./math";

if(process.env.NODE_ENV !== 'production'){
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');
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
  return element;
}

document.body.appendChild(component());

if(module.hot){
  module.hot.accept('./print.js',function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}