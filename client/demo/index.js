"use strict";
/**
 * Created by DuanG on 2016/7/14.
 */
require('ts-helpers');
var React = require('react');
var ReactDOM = require('react-dom');
var react_redux_1 = require('react-redux');
var configureStore_1 = require('./redux/configureStore');
var countContainer_1 = require("./container/countContainer");
/**
 * 第二个参数可以设置初始状态。 这对开发同构应用时非常有用，
 * 可以用于把服务器端生成的 state 转变后在浏览器端传给应用
 */
var store = configureStore_1.default({});
debugger;
/*const history = syncHistoryWithStore(hashHistory, store);
if(__DEV__){
    (React as any).__spread=Object.assign=require('object-assign');
}*/
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(countContainer_1.default, null)), document.getElementById('app'));
