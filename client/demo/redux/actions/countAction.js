"use strict";
exports.GET_COUNT_NUMBER = 'GET_COUNT_NUMBER';
/**
 * 把数据从应用传到store的有效载荷
 * 它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。
 */
function getCountNumberAction(countNumberVM) {
    return {
        type: exports.GET_COUNT_NUMBER,
        countNumberVM: countNumberVM
    };
}
exports.getCountNumberAction = getCountNumberAction;
