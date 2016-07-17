"use strict";
/**
 * Created by DuanG on 2016/7/14.
 */
/// <reference path="../../../typings/globals/globals.d.ts"/>
var redux_1 = require('redux');
var redux_thunk_1 = require('redux-thunk'); //
var rootReducer_1 = require('./reducers/rootReducer');
var createStoreWithMiddleware;
if (process.env.NODE_ENV === __DEV__) {
    createStoreWithMiddleware = redux_1.applyMiddleware(redux_thunk_1.default)(redux_1.createStore); //调用 applyMiddleware，使用 middleware 增强 createStore：
}
else {
    createStoreWithMiddleware = redux_1.compose(redux_1.applyMiddleware(redux_thunk_1.default))(redux_1.createStore); //从右到左来组合多个函数。
}
function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer_1.rootReducer, initialState);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
