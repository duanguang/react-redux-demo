"use strict";
/**
 * Created by DuanG on 2016/7/14.
 */
var redux_1 = require('redux');
var countReducer_1 = require('../../redux/reducers/countReducer');
var react_router_redux_1 = require('react-router-redux');
exports.rootReducer = redux_1.combineReducers({
    countReducer: countReducer_1.countReducer,
    routing: react_router_redux_1.routerReducer,
}); //合并Reducer
