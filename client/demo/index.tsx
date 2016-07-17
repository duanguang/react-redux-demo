/**
 * Created by DuanG on 2016/7/14.
 */
import 'ts-helpers'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './redux/configureStore';

import Index from "./container/countContainer"
/**
 * 第二个参数可以设置初始状态。 这对开发同构应用时非常有用，
 * 可以用于把服务器端生成的 state 转变后在浏览器端传给应用
 */
const store = configureStore({});
debugger;
/*const history = syncHistoryWithStore(hashHistory, store);
if(__DEV__){
    (React as any).__spread=Object.assign=require('object-assign');
}*/

ReactDOM.render(
    <Provider store={store}>
        <Index></Index>
    </Provider>,
document.getElementById('app')
);