/**
 * Created by DuanG on 2016/7/14.
 */
import {combineReducers} from 'redux';
import {countReducer, ICountNumberStoreState} from '../../redux/reducers/countReducer';
import {routerReducer} from 'react-router-redux';
export interface IStoreState{
    countReducer:ICountNumberStoreState
}
export const rootReducer=combineReducers({
    countReducer,
    routing: routerReducer,
});//合并Reducer