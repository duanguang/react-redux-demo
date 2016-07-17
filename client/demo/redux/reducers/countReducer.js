"use strict";
/**
 * Created by DuanG on 2016/7/14.
 */
var countAction_1 = require('../actions/countAction');
var countNumberVM_1 = require('../../model/countNumberVM');
var initState = {
    countNumberVM: new countNumberVM_1.CountNumberVM()
};
function countReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case countAction_1.GET_COUNT_NUMBER:
            return Object.assign({}, state, { countNumberVM: action.countNumberVM }); //不要修改 state。 使用 Object.assign() 新建了一个副本。
        default:
            return state; //default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
    }
}
exports.countReducer = countReducer;
