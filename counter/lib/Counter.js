var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd, selectCount, useSliceSelector, useSliceDispatch, } from "./counterSlice";
import "./Counter.css";
export function Counter() {
    var count = useSliceSelector(selectCount);
    var dispatch = useSliceDispatch();
    var _a = useState("2"), incrementAmount = _a[0], setIncrementAmount = _a[1];
    var incrementValue = Number(incrementAmount) || 0;
    return (_jsxs("div", { children: [_jsxs("div", __assign({ className: "row" }, { children: [_jsx("button", __assign({ className: "button", "aria-label": "Decrement value", onClick: function () { return dispatch(decrement()); } }, { children: "-" }), void 0), _jsx("span", __assign({ className: "value" }, { children: count }), void 0), _jsx("button", __assign({ className: "button", "aria-label": "Increment value", onClick: function () { return dispatch(increment()); } }, { children: "+" }), void 0)] }), void 0), _jsxs("div", __assign({ className: "row" }, { children: [_jsx("input", { className: "textbox", "aria-label": "Set increment amount", value: incrementAmount, onChange: function (e) { return setIncrementAmount(e.target.value); } }, void 0), _jsx("button", __assign({ className: "button", onClick: function () { return dispatch(incrementByAmount(incrementValue)); } }, { children: "Add Amount" }), void 0), _jsx("button", __assign({ className: "asyncButton", onClick: function () { return dispatch(incrementAsync(incrementValue)); } }, { children: "Add Async" }), void 0), _jsx("button", __assign({ className: "button", onClick: function () { return dispatch(incrementIfOdd(incrementValue)); } }, { children: "Add If Odd" }), void 0)] }), void 0)] }, void 0));
}
