"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by DuanG on 2016/7/15.
 */
var React = require('react');
var react_redux_1 = require('react-redux');
var Actions = require('../redux/actions/countAction');
var countComponent_1 = require("../component/countComponent");
var Index = (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        _super.call(this, props);
        this.state = {
            now: new Date() + ""
        };
    }
    Index.prototype.render = function () {
        /*<CountComponent countNumberVM={this.props.countNumberVM} onChange={this.props.getCountNumberAction}></CountComponent>*/
        return (React.createElement("div", null, React.createElement("p", null, this.state.now), React.createElement(countComponent_1.CountComponent, {countNumberVM: this.props.countNumberVM, onChange: this.props.getCountNumberAction})));
    };
    return Index;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(function (state) {
    return { countNumberVM: state.countReducer.countNumberVM };
}, function (dispatch) {
    return {
        getCountNumberAction: function (count) { return dispatch(Actions.getCountNumberAction(count)); }
    };
})(Index);
