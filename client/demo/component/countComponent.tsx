/**
 * Created by XD on 2016/7/14.
 */
import './css/counter.css'
import * as React from 'react';
import {CountNumberVM} from '../model/countNumberVM';
export interface ICounterProps{
    countNumberVM:CountNumberVM;
    onChange:(countNumberVM:CountNumberVM)=>void;
}
//组件要大写
export  class CountComponent extends React.Component<ICounterProps,any>{
    /*constructor(props) {
        super(props);
        console.log(this.state);
        this.state = {
            count: this.props.countNumberVM.count
        }
    }*///构造函数中,组件状态state中注入一个新的属性
    private onChange(countNumberVM:CountNumberVM){
        /*this.setState({
            count:this.props.countNumberVM.count
        });*///改变组件状态引发组件重新渲染
        this.setState({
            countNumberVM:countNumberVM
        });//改变state状态重新渲染组件
        this.props.onChange&&this.props.onChange(countNumberVM);
    }
    private inputChange(e) {
        let num = parseInt(e.target.value);
        if (isNaN(num)) {
            num = 0;
        }
        this.props.countNumberVM.count=num;
        this.onChange(this.props.countNumberVM);
    }
    private increment() {
        let count=this.props.countNumberVM.count;
        this.props.countNumberVM.count=parseInt(count.toString())+ 1;
       // this.state.count=this.props.countNumberVM.count;
        this.onChange(this.props.countNumberVM);
    }

    private decrement() {
        let count=this.props.countNumberVM.count;
        this.props.countNumberVM.count=parseInt(count.toString())- 1;
       // this.state.count=this.props.countNumberVM.count;
        this.onChange(this.props.countNumberVM);
    }

    render() {

        const {name,count} = this.props.countNumberVM;
        /*<input className="counter-value" onChange={(e)=>this.setState({count:e.target.value},()=>{this.props.countNumberVM.count=(this.state.count)})} value={this.state.count}/>*/
        return (
            <div className="counter">
                <input className="counter-value"  value={count} onChange={this.inputChange.bind(this)}/>
              <input className="counter-btn" type="button" onClick={this.decrement.bind(this)} value="-"/>
              <input className="counter-btn" type="button" onClick={this.increment.bind(this)} value="+"/>
            </div>
         );
    }
}