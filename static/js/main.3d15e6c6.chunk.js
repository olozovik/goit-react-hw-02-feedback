(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),i=n.n(r),o=(n(13),n(4)),s=n(5),d=n(6),b=n(8),u=n(7),j=n(0);function l(e){var t=e.type,n=e.onClickHandler;return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{type:t,onClick:function(){return n("good")},children:"Good"}),Object(j.jsx)("button",{type:t,onClick:function(){return n("neutral")},children:"Neutral"}),Object(j.jsx)("button",{type:t,onClick:function(){return n("bad")},children:"Bad"})]})}function h(e){var t=e.onClickHandler;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Please leave feedback"}),Object(j.jsx)(l,{type:"button",onClickHandler:t})]})}function k(e){var t=e.getFeedbacksQuantity,n=e.countTotalFeedback,c=e.countPositiveFeedbackPercentage;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Statistics"}),Object(j.jsxs)("p",{children:["Good: ",Object(j.jsx)("span",{children:t("good")})]}),Object(j.jsxs)("p",{children:["Neutral: ",Object(j.jsx)("span",{children:t("neutral")})]}),Object(j.jsxs)("p",{children:["Bad: ",Object(j.jsx)("span",{children:t("bad")})]}),Object(j.jsxs)("p",{children:["Total: ",Object(j.jsx)("span",{children:n()})]}),n()>0&&Object(j.jsxs)("p",{children:["Positive feedback: ",Object(j.jsxs)("span",{children:[c(),"%"]})]})]})}var O=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.getFeedbacksQuantity=function(t){return e.state[t]},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=e.state.good;return Math.round(n/t*100)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{onClickHandler:this.addFeedback}),Object(j.jsx)(k,{getFeedbacksQuantity:this.getFeedbacksQuantity,countTotalFeedback:this.countTotalFeedback,countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage})]})}}]),n}(c.Component);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3d15e6c6.chunk.js.map