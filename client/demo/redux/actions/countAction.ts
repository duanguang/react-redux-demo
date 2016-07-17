/**
 * Created by DuanG on 2016/7/14.
 */
import {IAction} from '../../redux/actions/IAction';
import {CountNumberVM} from '../../model/countNumberVM';
export const GET_COUNT_NUMBER = 'GET_COUNT_NUMBER';
export interface IGetcountNumberAction extends IAction,ICountNumberStoreState {
}
export interface ICountNumberStoreState {
    countNumberVM:CountNumberVM;
}
/**
 * 把数据从应用传到store的有效载荷
 * 它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。
 */
export function getCountNumberAction(countNumberVM:CountNumberVM):IGetcountNumberAction{
    return <IGetcountNumberAction>{
        type: GET_COUNT_NUMBER,
        countNumberVM: countNumberVM
    }
}
