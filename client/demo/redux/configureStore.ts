/**
 * Created by DuanG on 2016/7/14.
 */
/// <reference path="../../../typings/globals/globals.d.ts"/>
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';//

import {rootReducer} from './reducers/rootReducer';

let createStoreWithMiddleware;
if(process.env.NODE_ENV===__DEV__){
    createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);//调用 applyMiddleware，使用 middleware 增强 createStore：
}
else {
    createStoreWithMiddleware = compose(
        applyMiddleware(thunkMiddleware)
    )(createStore);//从右到左来组合多个函数。
}
export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState)
}