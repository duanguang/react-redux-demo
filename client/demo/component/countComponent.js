"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by XD on 2016/7/14.
 */
require('./css/counter.css');
var React = require('react');
//组件要大写
var CountComponent = (function (_super) {
    __extends(CountComponent, _super);
    function CountComponent() {
        _super.apply(this, arguments);
    }
    /*constructor(props) {
        super(props);
        console.log(this.state);
        this.state = {
            count: this.props.countNumberVM.count
        }
    }*/ //构造函数中,组件状态state中注入一个新的属性
    CountComponent.prototype.onChange = function (countNumberVM) {
        /*this.setState({
            count:this.props.countNumberVM.count
        });*/ //改变组件状态引发组件重新渲染
        this.setState({
            countNumberVM: countNumberVM
        }); //改变state状态重新渲染组件
        this.props.onChange && this.props.onChange(countNumberVM);
    };
    CountComponent.prototype.inputChange = function (e) {
        var num = parseInt(e.target.value);
        if (isNaN(num)) {
            num = 0;
        }
        this.props.countNumberVM.count = num;
        this.onChange(this.props.countNumberVM);
    };
    CountComponent.prototype.increment = function () {
        var count = this.props.countNumberVM.count;
        this.props.countNumberVM.count = parseInt(count.toString()) + 1;
        // this.state.count=this.props.countNumberVM.count;
        this.onChange(this.props.countNumberVM);
    };
    CountComponent.prototype.decrement = function () {
        var count = this.props.countNumberVM.count;
        this.props.countNumberVM.count = parseInt(count.toString()) - 1;
        // this.state.count=this.props.countNumberVM.count;
        this.onChange(this.props.countNumberVM);
    };
    CountComponent.prototype.render = function () {
        var _a = this.props.countNumberVM, name = _a.name, count = _a.count;
        /*<input className="counter-value" onChange={(e)=>this.setState({count:e.target.value},()=>{this.props.countNumberVM.count=(this.state.count)})} value={this.state.count}/>*/
        return (React.createElement("div", {className: "counter"}, React.createElement("input", {className: "counter-value", value: count, onChange: this.inputChange.bind(this)}), React.createElement("input", {className: "counter-btn", type: "button", onClick: this.decrement.bind(this), value: "-"}), React.createElement("input", {className: "counter-btn", type: "button", onClick: this.increment.bind(this), value: "+"})));
    };
    return CountComponent;
}(React.Component));
exports.CountComponent = CountComponent;
