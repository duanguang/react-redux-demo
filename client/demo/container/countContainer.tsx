/**
 * Created by DuanG on 2016/7/15.
 */
import * as React from 'react';
import {connect} from 'react-redux';
import  * as Actions from '../redux/actions/countAction';
import {CountNumberVM} from '../model/countNumberVM';
import {CountComponent} from "../component/countComponent";

import Dispatch = Redux.Dispatch;
import {IStoreState} from "../redux/reducers/rootReducer";


interface IIndexState{
    now:string;
}


interface IIndexProps {
    countNumberVM:CountNumberVM;
    getCountNumberAction:(countNumberVM:CountNumberVM)=>void;
}

class Index extends React.Component<IIndexProps,IIndexState>{

    constructor(props:IIndexProps){
        super(props);
        this.state={
          now: new Date()+""
        };
    }

   render(){
       /*<CountComponent countNumberVM={this.props.countNumberVM} onChange={this.props.getCountNumberAction}></CountComponent>*/
       return(
            <div>
                <p>{this.state.now}</p>
                <CountComponent countNumberVM={this.props.countNumberVM} onChange={this.props.getCountNumberAction}></CountComponent>
            </div>
        );
    }
}

export default connect(
    (state:IStoreState) => {
        return {countNumberVM: state.countReducer.countNumberVM};
    },
    (dispatch)=> {
        return {
            getCountNumberAction: (count)=>dispatch(Actions.getCountNumberAction(count))
        };
    }
)(Index);
