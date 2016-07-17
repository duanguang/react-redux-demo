/**
 * Created by DuanG on 2016/7/14.
 */
import {GET_COUNT_NUMBER, IGetcountNumberAction} from '../actions/countAction';
import {CountNumberVM} from '../../model/countNumberVM';

/**
 * countReducer纯函数，接收旧的state和action，
 * 返回新的state
 */

export interface ICountNumberStoreState {
    countNumberVM:CountNumberVM
}
const initState:ICountNumberStoreState = {
    countNumberVM: new CountNumberVM()
};

export function countReducer(state:ICountNumberStoreState = initState, action:IGetcountNumberAction): ICountNumberStoreState{
    switch (action.type) {
        case GET_COUNT_NUMBER:
            return Object.assign({},state,{countNumberVM:action.countNumberVM});//不要修改 state。 使用 Object.assign() 新建了一个副本。
        default:
            return state;//default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
    }
}


